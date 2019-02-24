$cmd = $Args[0]
$rest = $Args[1..($Args.length - 1)]
$name_elm = "mitarashinu-elm"
$name_py = "mitarashinu-python"

function convert_win_path($cmd)
{
  $DOCKER_CONVERT_WINDOWS_PATHS = 1
  echo $cmd
  iex $cmd
}

switch ($cmd)
{
  "build:elm" { convert_win_path "docker build -f Dockerfile.elm.dev -t ${name_elm} ." }
  "build:py" { convert_win_path "docker build -f Dockerfile.py.dev -t ${name_py} ." }
  "build:all" { ./d.ps1 build:elm; ./d.ps1 build:py }
  "exec:elm" { convert_win_path "docker exec -ti ${name_elm} ${rest} " }
  "run:elm" { convert_win_path "docker run -ti --rm -v ${PWD}:/source -p 55301:55301 --name ${name_elm} ${name_elm} ${rest}" }
  "run:py" { convert_win_path "docker run -ti --rm -v ${PWD}:/source --name ${name_py} ${name_py} ${rest}" }
  default { iex "${cmd} ${rest}" }
}
