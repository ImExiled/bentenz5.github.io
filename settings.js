var vodDirectory = "vods"; // Directory that stores the directories which contain your m3u8 and ts files.
var videos = ["Reap", "Girls Last Tour - Ugaku, Ugaku", "Girls Last Tour - More One Night"]; // Possible videos when CustomFolder is set to false.
var CustomFolder = true; // Use this to play strictly from one folder in vodDirectory.
var CustomFolderName = "Reap"; // Enforced folder to use. Should still be in the directory specified as vodDirectory.
var bgFileName = "bg.m3u8"; // m3u8 file to use. Corrosponding .ts files should be in the same folder as the m3u8 file.
var fallback = "bg.webm"; // Fallback file to use.