import os
from moviepy.editor import (
    ImageClip, AudioFileClip, TextClip, CompositeVideoClip,
    concatenate_videoclips
)
from PIL import Image

# Sample data structure
data = {
    0: {
        "audio": "static/audio/0_RABU.mp3",
        "poster": "static/images/image1.jpg",
        "text": "Photosynthesis is the process by which green plants convert sunlight into energy."
    },
    1: {
        "audio": "static/audio/3_2TB0.mp3",
        "poster": "static/images/image2.jpg",
        "text": "It takes place in the chloroplasts of plant cells, specifically in the thylakoid membranes."
    }
    # Add more segments as needed
}

# Ensure a temp directory for resized images
os.makedirs("temp", exist_ok=True)

clips = []

for idx, content in data.items():
    # Load the image and audio
    poster_file = content.get("poster")
    audio_file = content.get("audio")
    text = content.get("text")

    # Resize the image using PIL to ensure it fits in the frame
    with Image.open(poster_file) as img:
        img = img.resize((1280, 720), Image.Resampling.LANCZOS)
        temp_image_path = f"temp/resized_{idx}.jpg"
        img.save(temp_image_path)

    # Load audio file and get its duration
    if audio_file:
        audio_clip = AudioFileClip(audio_file)
        duration = audio_clip.duration + 1
    else:
        duration = 10  # Fallback duration if no audio is provided

    # Create an image clip synchronized with the audio duration
    image_clip = ImageClip(temp_image_path).set_duration(duration)

    # Add audio to the image clip
    if audio_file:
        image_clip = image_clip.set_audio(audio_clip)

    # Create the title text clip for "Vimate"
    title_clip = TextClip(
        "Vimate",
        fontsize=50,
        font="Arial-Bold",
        color="white",
        bg_color="black",
        size=(image_clip.w, 60)  # Title bar height is 60px
    ).set_position(("center", "top")).set_duration(duration)

    # Create the text clip for the content
    text_clip = TextClip(
        text,
        fontsize=35,
        font="Arial-Bold",
        color="white",
        bg_color="purple",
        size=(image_clip.w, None),
        method="caption"
    ).set_position(("center", "bottom")).set_duration(duration)

    # Combine the title bar, image, and text
    final_clip = CompositeVideoClip(
        [image_clip.set_position(("center", "center")), title_clip, text_clip],
        size=(image_clip.w, image_clip.h + 120)  # Add space for title and text
    )

    clips.append(final_clip)

# Concatenate all clips without any gaps
final_video = concatenate_videoclips(clips, method="compose", padding=-1)

# Output the final video
final_video.write_videofile("output_video.mp4", fps=24, codec="libx264", audio_codec="aac")

# Clean up temporary files (optional)
for file in os.listdir("temp"):
    os.remove(os.path.join("temp", file))
os.rmdir("temp")
