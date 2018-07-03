<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    </head>
    <body class="font-sans">

        <div class="bg-fixed flex items-end justify-center" style="height: 80vh; background-image: linear-gradient(135deg, #3490dc, #f490dc)">
            <div class="w-2/3 rounded-lg -mb-8 p-4 shadow-lg name" style="background: rgba(255,255,255,0.7)">
                <h1 class="header">
                    Sebastian Dittrich
                </h1>
            </div>
        </div>

        <h2 class="header mt-8">
            Projekte
        </h2>
        <div class="flex justify-center items-stretch flex-wrap p-4">
            <div class="project">
                <h3 class="header">
                    Asoziales Netzwerk
                </h3>
                <img src="{{ asset('projects/asozialesnetzwerk/hero.png') }}" alt="" class="hero">
                <img src="{{ asset('projects/asozialesnetzwerk/logo.png') }}" alt="" class="logo">
                <a href="https://asozialesnetzwerk.com">Ansehen</a>
            </div>
            <div class="project">
                <h3 class="header">
                    Todoninja
                </h3>
                <img src="{{ asset('projects/todoninja/hero.png') }}" alt="" class="hero">
                <img src="{{ asset('projects/todoninja/logo.png') }}" alt="" class="logo">
                <a href="https://todoninja.de">Ansehen</a>
            </div>
            <div class="project">
                <h3 class="header">
                    Greymatter
                </h3>
                <img src="{{ asset('projects/greymatter/hero.png') }}" alt="" class="hero">
                <img src="{{ asset('projects/greymatter/logo.jpg') }}" alt="" class="logo">
                <a href="http://greymatter.asozialesnetzwerk.com">Ansehen</a>
            </div>
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
