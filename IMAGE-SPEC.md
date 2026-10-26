# Ruang Obat — Design Specifications untuk Image Generation

## Tema Visual
- **Style**: Premium editorial, clean, modern, educational
- **Palet Warna**: 
  - Primary: Teal #0f766e
  - Secondary: Navy #1d4ed8
  - Accent: Purple #7c3aed
  - Background: Off-white #f8fafc
  - Text: Dark slate #1e293b
- **Typography**: 
  - Headings: Cormorant Garamond (serif, elegant)
  - Body: Inter/DM Sans (sans-serif, clean)
- **Mood**: Calm, trustworthy, educational, professional

## Gambar yang Dibutuhkan

### 1. Hero Background Image
**Lokasi**: Homepage hero section
**Spesifikasi**:
- Ukuran: 1920x1080px (landscape)
- Subject: Ruang belajar farmasi yang terang, modern, dengan buku dan tanaman obat
- Palette: Soft blue/teal tones, plenty of whitespace
- Text overlay area: Leave space di sebelah kiri untuk text
- Mood: Bright, clean, academic, welcoming
- Reference: "Ruang Belajar Farmakologi yang Cerah" vibe

**Prompt untuk AI**:
"A bright, modern pharmacy study room with natural light. Clean white surfaces, books about pharmacology arranged neatly, potted medicinal plants on wooden table, soft teal and navy color palette, academic atmosphere, plenty of whitespace on left side for text overlay, premium editorial style, 4k, photorealistic"

### 2. Category Background Images (6 images)
**Lokasi**: Setiap halaman kategori
**Spesifikasi**:
- Ukuran: 1200x400px (wide banner)
- Subject icons/illustrations untuk setiap kategori:
  1. Farmakologi Dasar: Microscope, DNA helix, molecular structures
  2. Bentuk & Penggunaan: Pills, capsules, medical icons
  3. Bahan Herbal: Dried herbs, leaves, natural remedies
  4. Farmakope: Books, scrolls, official documents
  5. Farmakognosi: Plant specimens, botanical illustrations
  6. Pustaka: Library shelves, books, academic setting

**Prompt untuk AI**:
"Clean minimalist illustration of [subject], soft teal and navy gradient background, educational icon style, flat design with subtle shadows, plenty of whitespace, modern pharmaceutical aesthetic, 4k"

### 3. Study Case Illustrations (3 images)
**Lokasi**: Halaman studi kasus
**Spesifikasi**:
- Ukuran: 800x600px
- Subject: 
  1. Doctor-patient consultation场景
  2. Pharmacy counter with medication
  3. Herbal medicine preparation
- Style: Soft illustration, not photorealistic
- Mood: Professional, educational, approachable

### 4. Logo Icon Variations
**Lokasi**: Header, favicon
**Spesifikasi**:
- Ukuran: 512x512px
- Subject: Open book with medical cross symbol
- Style: Line art, minimalist, navy blue
- Background: Transparent

### 5. Trust Badge Icons
**Lokasi**: Trust indicators
**Spesifikasi**:
- Ukuran: 200x200px
- Subject: Shield checkmark, pharmacist icon, verified badge
- Style: Flat design, green accent

## Design System Reference

### Colors to Use:
- Primary actions: #0f766e (teal)
- Success/trust: #15803d (green)
- Information: #1d4ed8 (navy)
- Warning: #d97706 (amber)
- Background: #f8fafc (off-white)
- Surface: #ffffff (white)

### Typography:
- Headings: Cormorant Garamond, serif
- Body: Inter, sans-serif
- Line height: 1.7 for readability
- Letter spacing: -0.02em for headings

### Layout:
- Max width: 1200px
- Padding: 24px-64px
- Border radius: 6px-16px
- Shadows: Soft, subtle

## File Naming Convention
```
assets/images/
├── hero-background.jpg          (1920x1080)
├── category-farmakologi.jpg     (1200x400)
├── category-penggunaan.jpg      (1200x400)
├── category-herbal.jpg          (1200x400)
├── category-farmakope.jpg       (1200x400)
├── category-farmakognosi.jpg    (1200x400)
├── category-pustaka.jpg         (1200x400)
├── studi-kasus-1.jpg            (800x600)
├── studi-kasus-2.jpg            (800x600)
├── studi-kasus-3.jpg            (800x600)
├── logo-icon.png                (512x512)
└── trust-badges.png             (200x200 each)
```

## Tips untuk ChatGPT/DALL-E:
1. Specify "soft teal and navy color palette" untuk konsistensi
2. Include "plenty of whitespace" untuk text overlay areas
3. Use "premium editorial style" untuk photography
4. Use "flat design" untuk icons/illustrations
5. Always specify "transparent background" untuk icons
6. Include "4k" atau "high resolution" untuk quality

## Catatan Penting:
- Semua gambar harus appropriate untuk medical/educational context
- Avoid stock photo clichés (too many pills, lab coats)
- Focus on clean, modern, trustworthy aesthetic
- Ensure text readability jika ada overlay
- Maintain consistent style across all images
