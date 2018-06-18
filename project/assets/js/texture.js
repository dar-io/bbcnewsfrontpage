var w = '100%',
  h = '100%';

// The svg element
var svg = d3.selectAll(".reporters-opt1 .has-reporter .promo__body, .reporters-opt2 .has-reporter .promo__body, .reporters-opt3 .has-reporter .promo__body, .reporters-opt4 .has-reporter .promo__body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

// the texture
var t = textures.lines()
    .size(4)
    .lighter(1)
    .stroke("#00bcd4")
    .strokeWidth(.5)
    .shapeRendering("crispEdges");


svg.call(t);

// Creat the shape to add fill
svg.append("rect")
  .attr({
    "x": 0,
    "y": 0,
    "width": "100%",
    "height": "100%",
    "rx": 0,
    "ry": 0
  })
  .style({
    "fill": t.url()
  });


  // The svg element
  var svgBottom = d3.selectAll(".reporters-opt1 .has-reporter, .reporters-opt2 .has-reporter, .reporters-opt3 .has-reporter,  .reporters-opt4 .has-reporter")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  // the texture
  var t = textures.lines()
      .orientation("6/8")
      .size(4)
      .lighter(1)
      .stroke("#b96305")
      .strokeWidth(.5)
      .shapeRendering("crispEdges");


  svgBottom .call(t);

  // Creat the shape to add fill
  svgBottom .append("rect")
    .attr({
      "x": 0,
      "y": 0,
      "width": "100%",
      "height": "100%",
      "rx": 0,
      "ry": 0
    })
    .style({
      "fill": t.url()
    });







    var w = '100%',
      h = '100%';

    // The svg element
    var svg = d3.selectAll(".reporters-opt5 .has-reporter .promo__body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    // the texture
    var t = textures.lines()
        .size(4)
        .lighter(1)
        .stroke("#00bcd4")
        .strokeWidth(.5)
        .shapeRendering("crispEdges");


    svg.call(t);

    // Creat the shape to add fill
    svg.append("rect")
      .attr({
        "x": 0,
        "y": 0,
        "width": "100%",
        "height": "100%",
        "rx": 0,
        "ry": 0
      })
      .style({
        "fill": t.url()
      });


      // The svg element
      var svgBottom = d3.selectAll(".reporters-opt5 .has-reporter")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      // the texture
      var t = textures.circles()
          .size(8)
          .lighter();


      svgBottom .call(t);

      // Creat the shape to add fill
      svgBottom .append("rect")
        .attr({
          "x": 0,
          "y": 0,
          "width": "100%",
          "height": "100%",
          "rx": 0,
          "ry": 0
        })
        .style({
          "fill": t.url()
        });
