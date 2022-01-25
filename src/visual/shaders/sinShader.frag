#version 300 es
precision mediump float;

in vec2 vUvs;
out vec4 shaderOut;

#define M_PI 3.14159265358979
uniform float uFreq;
uniform float uPhase;

void main() {
    vec2 uv = vUvs;
    float s = sin(uFreq * uv.x * 2. * M_PI + uPhase);
    shaderOut = vec4(vec3(s), 1.0);
}
