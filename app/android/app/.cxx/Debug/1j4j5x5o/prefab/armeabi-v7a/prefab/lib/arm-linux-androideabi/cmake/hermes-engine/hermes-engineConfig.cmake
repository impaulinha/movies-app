if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/anaag/.gradle/caches/8.14.3/transforms/e9c7f10b9e8509cb9432cece12cc5870/transformed/jetified-hermes-android-0.81.4-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/anaag/.gradle/caches/8.14.3/transforms/e9c7f10b9e8509cb9432cece12cc5870/transformed/jetified-hermes-android-0.81.4-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

