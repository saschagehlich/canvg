require('chai')
const canvg = require('../index')
const createCanvas = require('canvas').createCanvas

describe('Rendering', () => {
  it('should work', () => {
    var canvas = createCanvas(800, 600)
    canvg(canvas, `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="104px" height="51px" viewBox="0 0 104 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch Beta 48 (47232) - http://www.bohemiancoding.com/sketch -->
          <title>Damion</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Maske" transform="translate(4.000000, 4.000000)" stroke="#FF0000" stroke-width="9">
                  <g id="Damion">
                      <g id="B" transform="translate(60.000000, 0.000000)">
                          <path d="M17.3929839,15.3245165 L5.30071302,40.509316" id="Path-4"></path>
                          <path d="M2.78352016,11.499082 C11.9913385,1.19357874 30.3302946,-3.08760722 34.6373178,3.9934712 C37.974575,9.48017937 21.5852408,16.0498872 19.7400961,18.1349834 C17.8949515,20.2200796 35.7975433,22.4862887 29.6305128,32.2378828 C25.5242515,38.7308931 15.8489639,42.0126825 0.604649796,42.083251" id="Path-5"></path>
                      </g>
                      <g id="A" transform="translate(0.000000, 1.000000)">
                          <path d="M0.904947917,40.4570313 C15.1753472,13.8333333 25.0058594,0.521484375 30.3964844,0.521484375 C33.6742622,0.521484375 35.9205729,1.67078993 37.1354167,3.96940104" id="Path"></path>
                          <path d="M8.59505208,31.4589844 C18.374566,31.4589844 24.0863715,31.3260634 25.7304688,31.0602214" id="Path-2"></path>
                          <path d="M34.7519531,12.9746094 C29.0201823,26.8183594 26.1542969,34.6653646 26.1542969,36.515625 C26.1542969,39.2910156 26.8652344,42.2636719 31.3730469,40.8333333 C34.585171,39.8141195 39.0840859,35.6752306 44.8697917,28.4166667" id="Path-3"></path>
                      </g>
                  </g>
              </g>
          </g>
      </svg>`)
  })
})
