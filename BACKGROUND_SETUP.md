# 🎨 Adding Background Image to Hero Section

## Option 1: Use Your Image (Recommended)

### Step 1: Save the Image
1. Save your background image as `hero-bg.jpg` in the same folder as `index.html`
2. The image should show the purple/blue gradient with the globe

### Step 2: It's Already Configured!
The CSS is already set up to use `hero-bg.jpg`. Just save your image with that name and refresh the page.

### Current CSS (in style.css):
```css
.hero {
    background: 
        linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%),
        url('hero-bg.jpg') center/cover no-repeat;
}
```

## Option 2: Use Online Image URL

If your image is hosted online:

1. Open `style.css`
2. Find the `.hero` section (around line 18)
3. Replace `hero-bg.jpg` with your image URL:

```css
.hero {
    background: 
        linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%),
        url('https://your-image-url.com/image.jpg') center/cover no-repeat;
}
```

## Option 3: Embed Image Directly in HTML

Add this to the hero section in `index.html`:

```html
<div class="hero">
    <img src="hero-bg.jpg" alt="" class="hero-bg-img">
    <div class="hero-content">
        <!-- existing content -->
    </div>
</div>
```

Then add this CSS to `style.css`:

```css
.hero-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.3;
}
```

## Customization Options

### Adjust Overlay Opacity
Make the gradient more/less transparent:

```css
/* More transparent (see more of image) */
rgba(102, 126, 234, 0.6)  /* was 0.85 */

/* Less transparent (see less of image) */
rgba(102, 126, 234, 0.95)  /* was 0.85 */
```

### Add Blur Effect
```css
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('hero-bg.jpg') center/cover;
    filter: blur(3px);
    z-index: 0;
}
```

### Parallax Effect (Already Enabled!)
The `background-attachment: fixed;` creates a subtle parallax effect when scrolling.

## Troubleshooting

### Image not showing?
1. Check the filename matches exactly: `hero-bg.jpg`
2. Make sure image is in the same folder as `index.html`
3. Try using full path: `url('./hero-bg.jpg')`
4. Check browser console (F12) for errors

### Image looks stretched?
Change `cover` to `contain`:
```css
url('hero-bg.jpg') center/contain no-repeat;
```

### Image too bright/dark?
Adjust the gradient opacity (0.6 to 0.95)

## File Structure Should Look Like:
```
your-folder/
├── index.html
├── style.css
├── script.js
├── hero-bg.jpg  ← Your background image here
└── other files...
```

## Quick Test

1. Save your image as `hero-bg.jpg` in the project folder
2. Open `index.html` in browser
3. You should see your image behind the text with a purple overlay!

That's it! The background is now integrated. 🎉
