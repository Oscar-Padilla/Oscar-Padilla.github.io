var num = Math.floor(Math.random() * 4) + 1;

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `Mona.png`, // Background (image path or hex color).
  fg: `#000`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
