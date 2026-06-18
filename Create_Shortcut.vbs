Set WshShell = WScript.CreateObject("WScript.Shell")
strDesktop = WshShell.SpecialFolders("Desktop")
Set oShellLink = WshShell.CreateShortcut(strDesktop & "\MMSS Exam Pro.lnk")
oShellLink.TargetPath = WScript.CreateObject("Scripting.FileSystemObject").GetAbsolutePathName("Start_Exam.bat")
oShellLink.WindowStyle = 1
oShellLink.Description = "MMSS Exam System by Bereket Kenaw"
oShellLink.WorkingDirectory = WScript.CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
oShellLink.Save
MsgBox "ለአፑ አቋራጭ መንገድ (Shortcut) በዴስክቶፕ ላይ ተፈጥሯል!", 64, "Success"
