# Cursor Composer için SEO Talimatları

Aşağıdaki metni **Cursor Composer** (Cmd+I / Ctrl+I) içine yapıştırarak kullanın. Bu talimat, statik metadata’dan dinamik yapıya geçişi ve buildMetadata ile tam uyumu hedefler.

---

## Kopyala-yapıştır prompt (Türkçe)

```
Task: Bu projede SEO iyileştirmelerini uygula. Statik metadata kullanan sayfaları dinamik yapıya (generateMetadata + buildMetadata) dönüştür.

KRİTİK KURALLAR

1) buildMetadata sözleşmesi (src/lib/seo.ts)
- Kullanım: buildMetadata({ title, description?, path?, noIndex? })
- title: string (zorunlu)
- description: string (opsiyonel, yoksa varsayılan kullanılır)
- path: string (opsiyonel ama önerilir; canonical ve OG url için. Locale dahil: `/${locale}/sayfa-slug`)
- noIndex: boolean (opsiyonel)
- Tüm locale sayfalarında path mutlaka `/${locale}/...` formatında olmalı.

2) Metadata dönüşümü
- Şu dosyalarda export const metadata = { ... } yapısını tamamen kaldır:
  - src/app/[locale]/glossary/page.tsx
  - src/app/[locale]/international-cooperation/page.tsx
  - src/app/[locale]/internet-world/page.tsx
  - src/app/[locale]/safety-quality/page.tsx
  - src/app/[locale]/industry/evolution-of-the-internet/page.tsx
  - src/app/[locale]/industry/internet-technologies/page.tsx
- Yerine şu yapıyı kur (Next.js 14 App Router'da params Promise'dir, await et):

  type Props = { params: Promise<{ locale: string }> };

  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata({
      title: "Sayfa Başlığı",      // Mevcut metadata.title veya openGraph.title'dan al
      description: "Açıklama...",   // Mevcut description'dan al
      path: `/${locale}/sayfa-slug`, // Örn: /${locale}/glossary
    });
  }

- Dosyanın başına ekle: import { buildMetadata } from "@/lib/seo";
- import type { Metadata } from "next"; zaten varsa bırak.

3) Erişilebilirlik ([locale]/layout.tsx)
- <Header /> bileşeninin hemen üzerine (sayfanın en başına) Skip Link ekle:
  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg font-medium">Skip to main content</a>
- Ana içerik sarmalayıcı: <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>

4) Temizlik
- MapFallbackCard (veya harita bileşeni): Image alt="" ise alt={sourceLabel} yap.
- app/careers veya src/app/careers (locale dışındaki eski careers) varsa layout.tsx ve boş klasörü sil; tek careers src/app/[locale]/careers altında olmalı.
- capabilities.pdf: public/capabilities.pdf yoksa linki "Coming Soon" yap veya tıklanınca toast/uyarı veren bileşen kullan.

CONSTRAINT: next-intl ve mevcut [locale] yapısını bozma. buildMetadata parametrelerine sadık kal; path her zaman locale içermeli.
```

---

## buildMetadata API (referans)

| Parametre   | Tip      | Zorunlu | Açıklama |
|------------|----------|---------|----------|
| `title`    | string   | Evet    | Sayfa başlığı (site adı gerekirse otomatik eklenir) |
| `description` | string | Hayır  | Meta description; yoksa varsayılan kullanılır |
| `path`     | string   | Hayır  | Canonical ve OG url için; `/${locale}/slug` formatında ver |
| `noIndex`  | boolean  | Hayır  | true ise robots noindex, nofollow |

**Dosya:** `src/lib/seo.ts`

---

## Yeni sayfa eklerken

Locale altında yeni bir sayfa eklersen:

1. `src/app/[locale]/yeni-sayfa/page.tsx` oluştur.
2. Metadata için **statik `export const metadata` kullanma**; her zaman:

```ts
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "Sayfa Başlığı",
    description: "Kısa açıklama (tercihen 155–160 karakter).",
    path: `/${locale}/yeni-sayfa`,
  });
}
```

3. Sayfa bileşeninde `setRequestLocale(locale)` kullan (server component ise).
