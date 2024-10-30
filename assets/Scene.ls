{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "08e246f5-a10d-4d41-8df2-772f1326226b",
      "scriptPath": "../src/MainController.ts",
      "pres": [
        {
          "_$uuid": "a0a4e7fc-d104-4a80-95fd-079f76c4a061",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "52c8a607-2b8b-41fc-a9df-5e5ff8933c18",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "c7dec1e7-abf0-4cf8-b2bd-8f480b202449",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "cf53faa6-c33a-41ca-ac74-902f96ffa524",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "6dd8cfd5-a772-40a0-8752-102e6fc9e674",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "86b40a01-ede3-4333-9b92-21087becfaba",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "1dc91ecb-39f8-47a6-95d2-4226158f204c",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "5041ef1c-565a-4424-97a4-86dd4cd78c10",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "78d4a9e1-7dbd-4dca-b277-cd2b191e77a4",
          "_$type": "Prefab"
        },
        {
          "_$uuid": "7453d26c-f6dc-4bb1-b79c-10d6a1e23f74",
          "_$type": "Prefab"
        }
      ],
      "cai_liao": {
        "_$ref": "127bi0f9"
      },
      "hen_xian": {
        "_$ref": "2i0daqzg"
      },
      "li_zhi": {
        "_$uuid": "2ed6947e-8da9-4cd5-aaf7-04df718c1819",
        "_$type": "Prefab"
      },
      "neibu": {
        "_$ref": "l2cm6wut"
      },
      "fen_label": {
        "_$ref": "5xywfwxq"
      },
      "lianjiPre": {
        "_$uuid": "32afc0b5-781d-48a8-b17a-814b278b53e7",
        "_$type": "Prefab"
      },
      "yinyue": {
        "_$ref": "fwx9fq0m"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "wm602nag",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome"
      },
      "ambientColor": {
        "_$type": "Color",
        "r": 0.212,
        "g": 0.227,
        "b": 0.259
      },
      "_$child": [
        {
          "_$id": "bzz03unm",
          "_$type": "Sprite3D",
          "name": "Particle3D",
          "_$comp": [
            {
              "_$type": "ShurikenParticleRenderer",
              "lightmapScaleOffset": {
                "_$type": "Vector4"
              },
              "sharedMaterials": [
                {
                  "_$uuid": "db42ad88-9d69-48e5-8c97-901e33356b69",
                  "_$type": "Material"
                }
              ],
              "_particleSystem": {
                "_isPlaying": true,
                "duration": 1,
                "startLifetimeConstant": 1,
                "startSpeedConstant": 400,
                "startSizeType": 2,
                "startSizeConstant": 20,
                "startSizeConstantMin": 5,
                "startSizeConstantMax": 20,
                "startSizeConstantSeparate": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                },
                "startSizeConstantMinSeparate": {
                  "_$type": "Vector3"
                },
                "startSizeConstantMaxSeparate": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                },
                "startRotationConstantSeparate": {
                  "_$type": "Vector3"
                },
                "startRotationConstantMinSeparate": {
                  "_$type": "Vector3"
                },
                "startRotationConstantMaxSeparate": {
                  "_$type": "Vector3"
                },
                "startColorConstant": {
                  "_$type": "Vector4",
                  "x": 0.9623775038608284,
                  "y": 0.8161327117121129,
                  "z": 0.3804159744114472,
                  "w": 0.39215686274509803
                },
                "startColorConstantMin": {
                  "_$type": "Vector4",
                  "x": 1,
                  "y": 1,
                  "z": 1,
                  "w": 1
                },
                "startColorConstantMax": {
                  "_$type": "Vector4",
                  "x": 1,
                  "y": 1,
                  "z": 1
                },
                "maxParticles": 100,
                "randomSeed": {
                  "_$type": "Uint32Array",
                  "value": [
                    0
                  ]
                },
                "emission": {
                  "emissionRate": 500,
                  "_bursts": [
                    {
                      "_$type": "Burst",
                      "_time": 1,
                      "_minCount": 30,
                      "_maxCount": 300
                    }
                  ]
                },
                "shape": {
                  "_$type": "SphereShape",
                  "radius": 100
                }
              }
            }
          ]
        },
        {
          "_$id": "yr3l4oka",
          "_$type": "Sprite3D",
          "name": "Cube",
          "transform": {
            "localScale": {
              "_$type": "Vector3",
              "x": 3.0399301052093506,
              "y": 1.8099499940872192,
              "z": 1.9699900150299072
            }
          },
          "_$comp": [
            {
              "_$type": "MeshFilter",
              "sharedMesh": {
                "_$uuid": "6e013e32-fec7-4397-80d1-f918a07607be",
                "_$type": "Mesh"
              }
            },
            {
              "_$type": "MeshRenderer",
              "lightmapScaleOffset": {
                "_$type": "Vector4"
              },
              "sharedMaterials": [
                {
                  "_$uuid": "6f90bbb0-bcb2-4311-8a9d-3d8277522098",
                  "_$type": "Material"
                }
              ]
            }
          ]
        },
        {
          "_$id": "eyp75jjz",
          "_$type": "Camera",
          "name": "Camera",
          "orthographic": true,
          "orthographicVerticalSize": 600,
          "nearPlane": 1,
          "farPlane": 1000,
          "clearColor": {
            "_$type": "Color",
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0
          },
          "renderTarget": {
            "_$uuid": "d7e91834-5409-408a-9ecb-5a68b32195a8",
            "_$type": "RenderTexture"
          }
        }
      ]
    },
    {
      "_$id": "bcgifee8",
      "_$type": "Box",
      "name": "back",
      "width": 1080,
      "height": 1920,
      "_mouseState": 1,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "_$child": [
        {
          "_$id": "jqqm8nld",
          "_$type": "Image",
          "name": "Image",
          "width": 1080,
          "height": 1920,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "skin": "res://8a55180e-0347-4b3c-ad53-8f1316d45a01",
          "sizeGrid": "1740,0,0,0,1",
          "color": "#ffffff"
        }
      ]
    },
    {
      "_$id": "hamihze8",
      "_$type": "Box",
      "name": "hezhi",
      "width": 1080,
      "height": 1920,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "_$comp": [
        {
          "_$type": "9b55849a-f528-421e-8d69-ed6a1afa2efe",
          "scriptPath": "../src/HeZhi.ts"
        }
      ],
      "_$child": [
        {
          "_$id": "bdifnnjx",
          "_$type": "HBox",
          "name": "zuo_qiang",
          "x": -48,
          "width": 50,
          "height": 1920,
          "left": -48,
          "top": 0,
          "bottom": 0,
          "space": 0,
          "_$comp": [
            {
              "_$type": "RigidBody",
              "type": "static"
            },
            {
              "_$id": "1qbj",
              "_$type": "BoxCollider",
              "restitution": 0.1,
              "width": 50,
              "height": 1920
            }
          ]
        },
        {
          "_$id": "cbe3c5si",
          "_$type": "Image",
          "name": "di_bu",
          "y": 1770,
          "width": 1080,
          "height": 150,
          "left": 0,
          "right": 0,
          "bottom": 0,
          "skin": "res://124448ca-d4c9-4e29-b3e5-c617ddf6be48",
          "sizeGrid": "49,0,0,0,1",
          "color": "#ffffff",
          "_$comp": [
            {
              "_$type": "RigidBody",
              "type": "static",
              "label": "di_qiang"
            },
            {
              "_$id": "zt3j",
              "_$type": "BoxCollider",
              "restitution": 0.1,
              "width": 1080,
              "height": 150
            }
          ]
        },
        {
          "_$id": "ep1h028r",
          "_$type": "HBox",
          "name": "you_qiang",
          "x": 1078,
          "width": 50,
          "height": 1920,
          "right": -48,
          "top": 0,
          "bottom": 0,
          "space": 0,
          "_$comp": [
            {
              "_$type": "RigidBody",
              "type": "static"
            },
            {
              "_$id": "p0uu",
              "_$type": "BoxCollider",
              "restitution": 0.1,
              "width": 50,
              "height": 1920
            }
          ]
        }
      ]
    },
    {
      "_$id": "127bi0f9",
      "_$type": "Box",
      "name": "cai_liao",
      "width": 1080,
      "height": 1920,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0
    },
    {
      "_$id": "2i0daqzg",
      "_$type": "Image",
      "name": "hen_xian",
      "y": 400,
      "width": 512,
      "height": 50,
      "visible": false,
      "_filters": [],
      "skin": "res://b9e8feda-8ae0-47c9-9523-8a0b2db84a6e",
      "sizeGrid": "0,0,0,0,1",
      "color": "#e9cf16",
      "_$comp": [
        {
          "_$type": "RigidBody",
          "type": "static",
          "label": "henxian"
        },
        {
          "_$id": "rrjk",
          "_$type": "BoxCollider",
          "isSensor": true,
          "width": 512,
          "height": 50
        },
        {
          "_$type": "ab7d8b3d-592e-4990-8621-30824187382c",
          "scriptPath": "../src/xianjs.ts",
          "text": ""
        }
      ]
    },
    {
      "_$id": "l2cm6wut",
      "_$type": "Sprite",
      "name": "neibu",
      "width": 100,
      "height": 100
    },
    {
      "_$id": "17gwu3dt",
      "_$type": "Box",
      "name": "Box",
      "x": 40,
      "y": 100,
      "width": 300,
      "height": 100,
      "left": 40,
      "top": 100,
      "_$child": [
        {
          "_$id": "fw60osm3",
          "_$type": "Image",
          "name": "Image",
          "width": 300,
          "height": 100,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "skin": "res://4dec530a-0d50-4e21-b852-8eee41f157d2",
          "sizeGrid": "0,41,0,43,0",
          "color": "#ffffff"
        },
        {
          "_$id": "5xywfwxq",
          "_$type": "FontClip",
          "name": "FontClip",
          "x": 25,
          "y": 25,
          "width": 250,
          "height": 50,
          "centerX": 0,
          "centerY": 0,
          "interval": 50,
          "skin": "res://d24c1cbc-0657-41fa-a966-471705de2af1",
          "align": "center",
          "sheet": "0123456789",
          "value": "0",
          "spaceX": 0,
          "spaceY": 0
        }
      ]
    },
    {
      "_$id": "fwx9fq0m",
      "_$type": "Image",
      "name": "yinyue",
      "x": 880,
      "y": 250,
      "width": 100,
      "height": 100,
      "_mouseState": 2,
      "hitTestPrior": true,
      "right": 100,
      "top": 250,
      "skin": "res://9970acf5-e18a-4471-b974-540baf4fc221",
      "color": "#ffffff"
    }
  ]
}