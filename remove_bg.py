from PIL import Image

def remove_bg(input_path, output_path, tolerance=220):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if pixel is close to white
        avg = (item[0] + item[1] + item[2]) / 3.0
        if avg > tolerance:
            # Calculate alpha to create a smooth transition (anti-aliasing)
            alpha = int(255 * (255 - avg) / (255 - tolerance))
            alpha = max(0, min(255, alpha))
            newData.append((item[0], item[1], item[2], alpha))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_bg("public/logo-original.png", "public/logo-transparent.png")
print("Image background removed and saved as public/logo-transparent.png")
