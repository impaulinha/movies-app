if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/anaag/.gradle/caches/8.14.3/transforms/d1b93ea6002a5dd45ea11e44a3168480/transformed/jetified-hermes-android-0.81.4-release/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/anaag/.gradle/caches/8.14.3/transforms/d1b93ea6002a5dd45ea11e44a3168480/transformed/jetified-hermes-android-0.81.4-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

