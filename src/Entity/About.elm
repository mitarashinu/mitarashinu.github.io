module Entity.About exposing (About, decoder)

import Json.Decode exposing (Decoder, string, succeed)
import Json.Decode.Pipeline exposing (required)


type alias About =
    { body : String
    }


decoder : Decoder About
decoder =
    succeed About
        |> required "body" string
