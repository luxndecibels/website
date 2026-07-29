import sys
from PIL import Image

def process_image(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    for item in data:
        r, g, b, a = item
        
        # Calculate max and min to determine saturation / color presence
        cmax = max(r, g, b)
        cmin = min(r, g, b)
        
        # If it's mostly white/gray background
        if r > 200 and g > 200 and b > 200 and (cmax - cmin) < 30:
            # Make transparent
            new_data.append((255, 255, 255, 0))
        # If it's mostly black/dark text
        elif r < 100 and g < 100 and b < 100 and (cmax - cmin) < 30:
            # Make it white (to be visible on dark background)
            # You can preserve the original alpha for anti-aliasing, but let's just make it white.
            # For anti-aliased edges, we can interpolate. But a simple threshold might work.
            # Wait, if we want to preserve anti-aliasing against white background:
            # The original pixel was a blend of black text and white background.
            # So its darkness is its alpha value for the white text.
            brightness = (r + g + b) // 3
            # Invert brightness to get alpha (darker pixel -> more opaque white text)
            alpha = 255 - brightness
            new_data.append((255, 255, 255, alpha))
        else:
            # For colored pixels, we also need to remove the white background blending.
            # If a pixel has color (e.g. pink, blue, yellow), it's blending with white background.
            # But just keeping it as is works reasonably well if we don't mess with it.
            # Let's see if we just keep the colored pixels
            if (cmax - cmin) >= 30:
                new_data.append((r, g, b, 255))
            else:
                new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    process_image("public/logo-original.png", "public/logo-transparent.png")
    print("Done")
