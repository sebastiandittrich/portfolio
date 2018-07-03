<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="{{ asset('css/micon.css') }}">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    </head>
    <body class="font-sans">

        <div class="bg-fixed flex items-end justify-center" style="background-image: linear-gradient(135deg, #3490dc, #f490dc)">
            <div class="w-2/3 rounded-lg -mb-8 mt-8 p-4 shadow-lg name" style="background: rgba(255,255,255,0.7)">
                <h1 class="header">
                    Sebastian Dittrich
                </h1>
            </div>
        </div>

        <div class="mt-16 container mx-auto p-4 text-grey-darker text-center">
            Hallo, ich bin <span class="font-bold">Basti</span>. <br><br>
            Ich bin Profi im Umgang mit <span class="font-bold">PHP</span>. <br><br>
            Und ich mag <span class="font-bold">Laravel</span>. <br><br>
            Ich entwickle nämlich <span class="font-bold">Web-Apps</span>. <br><br>
            Hier ein paar <span class="font-bold">Beispiele</span>:
        </div>
        <div class="flex justify-center items-stretch flex-wrap p-4 container mx-auto">
            <div class="project">
                <h3 class="header">
                    Asoziales Netzwerk
                </h3>
                <img src="{{ asset('projects/asozialesnetzwerk/hero.png') }}" alt="" class="hero">
                <img src="{{ asset('projects/asozialesnetzwerk/logo.png') }}" alt="" class="logo">
                <a href="https://asozialesnetzwerk.com">
                    Ansehen
                    <i class="mi mi-ChevronRight intext"></i>
                </a>
            </div>
            <div class="project">
                <h3 class="header">
                    Todoninja
                </h3>
                <img src="{{ asset('projects/todoninja/hero.png') }}" alt="" class="hero">
                <img src="{{ asset('projects/todoninja/logo.png') }}" alt="" class="logo">
                <a href="https://todoninja.de">
                    Ansehen
                    <i class="mi mi-ChevronRight intext"></i>
                </a>
            </div>
            <div class="project">
                <h3 class="header">
                    Greymatter
                </h3>
                <img src="{{ asset('projects/greymatter/hero.png') }}" alt="" class="hero">
                <img src="{{ asset('projects/greymatter/logo.jpg') }}" alt="" class="logo">
                <a href="http://greymatter.asozialesnetzwerk.com">
                    Ansehen
                    <i class="mi mi-ChevronRight intext"></i>
                </a>
            </div>
        </div>

        <div class="mt-8 container mx-auto p-4 text-grey-darker text-center">
            Aber ich kann auch noch <span class="font-bold">mehr</span>. <br><br>
            Zum Beispiel <span class="font-bold">KI's</span> programmieren. <br><br>
            Oder <span class="font-bold">Server</span> managen. <br><br>
            Zur besseren Übersicht, <br> alle meine <span class="font-bold">Programmiersprachen</span>.
        </div>

        <div class="flex flex-wrap justify-center items-center languages container mx-auto">
            <img src="{{ asset('languages/php.png') }}" alt="">
            <img src="{{ asset('languages/html.png') }}" alt="">
            <img src="{{ asset('languages/css.png') }}" alt="">
            <img src="{{ asset('languages/mysql.png') }}" alt="">
            <img src="{{ asset('languages/javascript.png') }}" alt="">
            <img src="{{ asset('languages/python.png') }}" alt="">
            <img src="{{ asset('languages/rust.png') }}" alt="">
            <img src="{{ asset('languages/c-sharp.png') }}" alt="">
            <img src="{{ asset('languages/bash.png') }}" alt="">
            <img src="{{ asset('languages/git.png') }}" alt="">
        </div>

        {{-- <div class="hero">
            <h1 class="header name">
                Sebastian Dittrich
            </h1>
        </div>
        <div class="content">
            <h2 class="header">
                {{ __('Projects') }}
            </h2>
            <div class="projects">
                <a class="project" href="https://asozialesnetzwerk.com">
                    <h3 class="header">
                        Asoziales Netzwerk
                    </h3>
                    <img src="{{ asset('projects/asozialesnetzwerk/hero.png') }}" alt="" class="hero">
                    <img src="{{ asset('projects/asozialesnetzwerk/logo.png') }}" alt="" class="logo">
                </a>
                <a class="project" href="https://asozialesnetzwerk.com">
                    <h3 class="header">
                        Asoziales Netzwerk
                    </h3>
                    <img src="{{ asset('projects/asozialesnetzwerk/hero.png') }}" alt="" class="hero">
                    <img src="{{ asset('projects/asozialesnetzwerk/logo.png') }}" alt="" class="logo">
                </a>
                <a class="project" href="https://asozialesnetzwerk.com">
                    <h3 class="header">
                        Asoziales Netzwerk
                    </h3>
                    <img src="{{ asset('projects/asozialesnetzwerk/hero.png') }}" alt="" class="hero">
                    <img src="{{ asset('projects/asozialesnetzwerk/logo.png') }}" alt="" class="logo">
                </a>
            </div>
        </div> --}}
    </body>
</html>
