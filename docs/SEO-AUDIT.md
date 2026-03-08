# Teknik SEO Denetim Raporu — cloudtelc.com/en

**Tarih:** 2026  
**Kapsam:** https://www.cloudtelc.com/en (ve tüm locale’ler: /en, /de, /tr)

---

## 1. Meta etiketleri (Title, description, h1–h6)

### Yapılanlar
- **Title / description:** Ana sayfa ve çoğu sayfa `buildMetadata()` veya `generateMetadata` ile title + description alıyor. Varsayılan şablon: `%s | Cloud Telecommunications`.
- **Canonical:** `buildMetadata()` artık `path` verildiğinde `alternates.canonical` üretiyor. About, Contact, Capabilities, Coverage, Services, vb. locale’li path ile canonical alıyor.
- **Open Graph:** `buildMetadata` ile title, description, type, url set ediliyor.

### Başlık hiyerarşisi
- Her sayfada **tek h1** var (ana başlık).
- Alt bölümler **h2**, gerektiğinde **h3** (örn. About’ta timeline, Footer’da bölüm başlıkları).
- Atlama yok: h1 → h2 → h3 sırası korunuyor.

### Öneriler
1. **Description uzunluğu:** Meta description’ları **~155–160 karakter** civarında tutun (snippet kesilmesini azaltır).
2. **Statik metadata kullanan sayfalar:** Glossary, International Cooperation, Internet World, Safety & Quality, Industry sayfaları şu an statik `metadata` kullanıyor. Hepsi için `generateMetadata` + `buildMetadata(..., path: \`/${locale}/...\`)` kullanırsanız canonical ve OG url locale’e göre doğru olur.
3. **Proje / servis detay:** `projects/[slug]` ve `services/[slug]` için metadata zaten dynamic; slug’a göre title/description iyi. Canonical için `path: \`/${locale}/projects/${slug}\`` (ve services için benzeri) eklenebilir.

---

## 2. Hız ve performans

### Mevcut durum
- **Font:** `next/font` (Inter) ile font subset ve otomatik optimizasyon kullanılıyor.
- **Görseller:** `next/image` ile lazy loading ve `sizes` kullanımı var.
- **JS:** Framer Motion transpile ediliyor; client component’ler sayfa bazında yüklendiği için büyük bir blok yok.

### Öneriler
1. **Framer Motion:** Sadece animasyon kullanan sayfalarda kullanılıyorsa, ilgili sayfa/component’lerde `dynamic(..., { ssr: false })` veya lazy import ile yükleyebilirsiniz (LCP’yi hafifçe iyileştirir).
2. **Third-party:** FiberChat / harici widget’lar varsa mümkünse lazy load veya iframe ile sonradan yükleyin.
3. **Core Web Vitals:** Production’da Lighthouse / PageSpeed Insights ile LCP, FID, CLS ölçümü yapın; gerekirse görsel boyutları ve `priority` kullanımını (hero image vb.) gözden geçirin.

---

## 3. Mobil uyumluluk

### Mevcut durum
- **Viewport:** `layout.tsx` içinde `viewport: { width: "device-width", initialScale: 1, maximumScale: 5 }` tanımlı.
- **Responsive:** Tailwind breakpoint’leri (sm, md, lg) tutarlı kullanılıyor; Header’da mobil menü, grid’lerde tek sütun → çok sütun geçişi var.
- **Dokunma hedefleri:** Mobil menü butonu `min-h-[44px] min-w-[44px]` ile yeterli tıklanabilir alan sağlanmış.

### Öneri
- Form alanları ve footer link’lerinde de en az **44×44 px** dokunma alanı olduğundan emin olun (şu an genel olarak uygun görünüyor).

---

## 4. Görsel optimizasyonu (alt etiketleri)

### Düzeltilen
- **MapFallbackCard:** Görselde `alt=""` vardı; `alt={sourceLabel}` olacak şekilde güncellendi (harita kartı için anlamlı açıklama).

### Zaten uygun olanlar
- **Header logo:** `alt="Cloud Telecommunications – Fiber Infrastructure & Construction"`.
- **Footer logo:** `alt="Cloud Telecommunications"`.
- **Servis kartları:** `alt={s.title}`.
- **Proje kartları / detay:** `alt={p.title}` / `alt={project.title}`.

### Öneri
- Decorative SVG’ler (örn. CoverageMap’teki Texas haritası) `aria-hidden="true"` ile işaretli; ek bir alt gerekmez. İleride gerçek harita görseli eklerseniz, anlamlı bir `alt` (örn. “Texas service areas map”) verin.

---

## 5. Semantik HTML

### Mevcut durum
- **Landmark’lar:** `<header>`, `<nav aria-label="Main navigation">`, `<main>`, `<footer>` kullanılıyor.
- **Bölümler:** İçerik blokları `<section>` ile ayrılmış; bazılarında `aria-labelledby` ile h2’ye bağlantı var (örn. internet-world, international-cooperation).
- **Listeler:** Menü ve footer link’leri `<ul>/<li>` içinde.

### Öneriler
1. Uzun içerikli sayfalarda her `<section>` için `aria-labelledby` ile ilgili h2/h3 id’sine bağlantı verilebilir (ekran okuyucu ve yapı anlamı için faydalı).
2. Ana içerik alanı için `<main id="main-content">` kullanılırsa, “skip to main content” link’i eklenebilir (a11y + SEO).

Örnek skip link (Header’ın en üstüne):

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white rounded"
>
  Skip to main content
</a>
```

Ve `[locale]/layout.tsx` içinde:

```tsx
<main id="main-content" className="flex-1" tabIndex={-1}>
  {children}
</main>
```

---

## 6. Hatalar ve kırık linkler

### Kontrol edilenler
- **Internal link’ler:** Hepsi `Link` (next-intl) ile locale prefix’li; kırık link beklenmiyor.
- **Harici link’ler:** `target="_blank"` kullanılanlarda `rel="noopener noreferrer"` mevcut.
- **Capabilities PDF:** `href="/capabilities.pdf"` — Bu dosya `public/` altında yoksa 404 olur. Ya `public/capabilities.pdf` ekleyin ya da link’i geçici olarak kaldırın / “Coming soon” yapın.

### Gereksiz / çakışan yapı
- **`app/careers/layout.tsx`:** Careers artık sadece `app/[locale]/careers/` altında. `app/careers/` içinde sadece bu layout kaldıysa, bu dosya kullanılmıyor ve kaldırılabilir (tek kaynak olarak `[locale]/careers` kalsın).

---

## 7. Dil (lang) ve canonical

### Yapılanlar
- **html lang:** Root layout’ta `lang="en"` sabit olduğu için, `HtmlLang` adlı bir client component eklendi. `[locale]` layout’ta render ediliyor ve `document.documentElement.lang` değerini locale’e göre (en/de/tr) ayarlıyor. Böylece dil değişince sayfa dil atributu da güncelleniyor (SEO ve erişilebilirlik için).
- **Canonical:** `buildMetadata` ile path verilen tüm sayfalarda canonical URL locale dahil doğru üretiliyor.

---

## Özet: Yapılan düzeltmeler

| Konu | Düzeltme |
|------|----------|
| Canonical | `buildMetadata()` içinde `alternates.canonical` eklendi; path verilen sayfalar doğru canonical alıyor. |
| Coverage metadata | `generateMetadata` + `buildMetadata` ve `path: \`/${locale}/coverage\`` kullanıldı. |
| Services metadata | Statik metadata → `generateMetadata` + `path: \`/${locale}/services\`` yapıldı. |
| Görsel alt | MapFallbackCard’da `alt=""` → `alt={sourceLabel}`. |
| html lang | `HtmlLang` component’i ile locale’e göre `document.documentElement.lang` ayarlanıyor. |

---

## Önerilen sonraki adımlar

1. Glossary, International Cooperation, Internet World, Safety & Quality ve Industry sayfalarında `generateMetadata` + `buildMetadata(..., path: \`/${locale}/...\`)` kullanımına geçin.
2. `public/capabilities.pdf` dosyasını ekleyin veya PDF link’ini “Coming soon” ile değiştirin.
3. İsteğe bağlı: `<main id="main-content">` ve “Skip to main content” link’i ekleyin.
4. Gereksizse `app/careers/layout.tsx` dosyasını kaldırın.
5. Production’da Lighthouse (Performance, Accessibility, Best Practices, SEO) ile periyodik ölçüm yapın.

Bu rapor, mevcut kod tabanına göre hazırlanmıştır; canlı sitede ek kontroller (gerçek kırık link taraması, hız testi) yapmanız faydalı olur.
