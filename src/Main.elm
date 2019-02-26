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
import Bulma.Layout exposing (container, footer)
import Bulma.Modifiers exposing (Color(..), VerticalAlignment(..))
import Html exposing (Html, a, img, span, text)
import Html.Attributes exposing (href, src)
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


wrapperView : Html Msg
wrapperView =
    let
        burger =
            List.repeat 3 (span [] [])
                |> navbarBurger
                    False
                    []
    in
    container []
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
        , footer []
            [ text "hoge"
            ]
        ]


view : Model -> Document Msg
view model =
    { title = "見たら死ぬ"
    , body =
        [ wrapperView
        ]
    }
