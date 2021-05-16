
import sys
from cx_Freeze import setup, Executable

base = None
if sys.platform == "win32":
    base = "Win32GUI"
 
buildOptions = dict(include_files = ['ressource/']) #folder,relative path. Use tuple like in the single file to set a absolute path.



executables = [Executable("main.py", base=base)]

setup(
    name="simple_PyQt5",
    version="0.1",
    description="Sample cx_Freeze PyQt5 script",
    #options = dict(build_exe = buildOptions),
    options = {"build_exe": buildOptions},
    executables=executables,
)
