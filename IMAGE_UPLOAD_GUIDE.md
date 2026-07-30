# Image Upload Guide for Clínica Dental Bonilla

## 📸 Required Images to Upload

Please upload the following images to complete your website customization:

### 1. Logo
- **File name:** `logo.png`
- **Location:** `assets/images/logo.png`
- **Requirements:** 
  - Transparent background (PNG format)
  - Recommended size: 300-500px wide
  - High resolution for crisp display

### 2. Hero Image
- **File name:** `hero.jpg`
- **Location:** `assets/images/hero.jpg`
- **Requirements:**
  - Wide format (16:9 or similar)
  - Minimum 1920px wide
  - High quality, bright and welcoming image
  - Suggested: Clinic interior, smiling staff, or dental care scene

### 3. Dentist Photos (2 photos needed)
- **File names:**
  - `dentist-bonilla.jpg` (for Dr. Adolfo Bonilla)
  - `dentist-macia.jpg` (for Dr. Jorge Macia)
- **Location:** `assets/images/`
- **Requirements:**
  - Professional headshots
  - Square format preferred (800x800px minimum)
  - Clean background
  - Friendly, professional expression

### 4. Smile Gallery (OPTIONAL)
- **File names:** `smile-01.jpg`, `smile-02.jpg`, `smile-03.jpg`, etc.
- **Location:** `assets/images/gallery/`
- **Requirements:**
  - Before/after dental work photos
  - 5-10 images recommended
  - Consistent size and quality
  - High resolution

### 5. Insurance Logos (OPTIONAL)
- **File names:** Use provider names (e.g., `provider-name.svg` or `provider-name.png`)
- **Location:** `assets/images/insurance/`
- **Requirements:**
  - SVG format preferred (or PNG with transparent background)
  - Official logos from insurance companies you accept

---

## 🔗 GitHub Upload Instructions

### Option 1: Via GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to the `assets/images/` folder
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Add a commit message (e.g., "Add clinic images")
6. Click "Commit changes"

### Option 2: Via Git Command Line

```bash
# Navigate to your repository
cd /path/to/your/repo

# Create directories if needed
mkdir -p assets/images/gallery
mkdir -p assets/images/insurance

# Copy your images to the correct locations
cp /path/to/your/logo.png assets/images/
cp /path/to/your/hero.jpg assets/images/
cp /path/to/your/dentist-bonilla.jpg assets/images/
cp /path/to/your/dentist-macia.jpg assets/images/

# Add and commit
git add assets/images/
git commit -m "Add Clínica Dental Bonilla images"
git push
```

---

## ✅ Current Configuration Status

### ✓ Completed
- [x] Practice name: **Clínica Dental Bonilla**
- [x] Phone: **+504 9887-5558**
- [x] Email: **clinicadentalbonillahn@gmail.com**
- [x] Address: **Pasaje Andará - Flores, Barrio Torondón, Comayagua**
- [x] Hours: **8:00 AM – 5:00 PM (Mon-Sat), Closed Sunday**
- [x] Tagline (ES/EN): Configured
- [x] Brand colors: Primary `#0B5EA8`, Accent `#00C4E0`
- [x] Two dentists: Dr. Adolfo Bonilla & Dr. Jorge Macia
- [x] 9 services with professional descriptions
- [x] Social media links: Facebook & Instagram

### ⏳ Pending (Images Required)
- [ ] Logo (`assets/images/logo.png`)
- [ ] Hero image (`assets/images/hero.jpg`)
- [ ] Dr. Bonilla photo (`assets/images/dentist-bonilla.jpg`)
- [ ] Dr. Macia photo (`assets/images/dentist-macia.jpg`)
- [ ] Smile gallery images (optional)
- [ ] Insurance logos (optional)

---

## 📋 Quick Checklist

Before launching the website, ensure:

1. [ ] All required images uploaded to correct locations
2. [ ] Images are high quality and properly sized
3. [ ] Test the website on mobile and desktop
4. [ ] Verify phone number click-to-call works
5. [ ] Check social media links open correctly
6. [ ] Test language toggle (ES/EN) functionality
7. [ ] Verify Google Maps directions link works

---

## 🚀 Next Steps

1. **Upload Images:** Follow the instructions above to upload your images to the GitHub repository
2. **Test Locally:** Run `npx serve .` to preview the site locally
3. **Deploy:** Once images are uploaded, the site will be ready for deployment
4. **Review:** Check all sections display correctly with your images

---

## Need Help?

If you need assistance with:
- Image sizing or optimization
- GitHub upload process
- Any configuration changes

Please reach out and I'll be happy to help!
