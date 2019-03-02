module Main exposing (main)

import Browser exposing (Document, UrlRequest, application)
import Browser.Navigation exposing (Key)
import Bulma.Components
    exposing
        ( fixedNavbar
        , navbarBrand
        , navbarBurger
        , navbarItem
        , navbarItemLink
        , navbarMenu
        , navbarModifiers
        , navbarStart
        )
import Bulma.Elements exposing (content)
import Bulma.Layout exposing (SectionSpacing(..), container, footer, section)
import Bulma.Modifiers exposing (Color(..), Size(..), VerticalAlignment(..))
import Html exposing (Html, a, br, div, i, img, p, span, text)
import Html.Attributes exposing (class, href, src)
import Html.Events exposing (onClick)
import Url exposing (Url)


main : Program () Model Msg
main =
    application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = ClickedLink
        , onUrlChange = ChangeUrl
        }


type alias Model =
    { key : Key
    }


init : flags -> Url -> Key -> ( Model, Cmd Msg )
init flags url key =
    ( { key = key }, Cmd.map (\_ -> Init) Cmd.none )


type Msg
    = Init
    | ClickedLink UrlRequest
    | ChangeUrl Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ClickedLink urlRequest ->
            ( model, Cmd.none )

        ChangeUrl url ->
            ( model, Cmd.none )

        Init ->
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


wrapperView : List (Html msg) -> Html msg
wrapperView containtsView =
    let
        burger =
            List.repeat 3 (span [] [])
                |> navbarBurger
                    False
                    []
    in
    section NotSpaced
        [ class "full-height" ]
        [ fixedNavbar
            Top
            { navbarModifiers
                | color = Light
            }
            []
            [ navbarBrand []
                burger
                [ navbarItem False
                    []
                    [ a [ href "/" ]
                        [ img [ src "./statics/images/logo.png" ] []
                        ]
                    ]
                ]
            , navbarMenu False
                []
                [ navbarStart []
                    [ navbarItemLink False [] [ text "info" ]
                    ]
                ]
            ]
        , container []
            [ div [ class "containts-wrapper" ]
                containtsView
            ]
        , footer [ class "fixed-bottom" ]
            [ content Standard
                [ class "has-text-centered" ]
                [ span [ class "is-size-7" ]
                    [ text "Copyright © 見たら死ぬ official website All Rights Reserved."
                    ]
                , br [] []
                , span [ class "is-size-7 footer-icon" ] <|
                    List.map
                        (\( url, icon ) -> a [ href url ] [ i [ class <| "fa-2x fa-" ++ icon ] [] ])
                        [ ( "mailto:mitarashinu@gmail.com", "envelope fas" )
                        , ( "https://twitter.com/mitarashinu", "twitter fab" )
                        , ( "https://github.com/mitarashinu/mitarashinu.github.io", "github fab" )
                        ]
                ]
            ]
        ]


view : Model -> Document Msg
view model =
    { title = "見たら死ぬ"
    , body =
        [ wrapperView
            [ text "hoge"
            ]
        ]
    }
