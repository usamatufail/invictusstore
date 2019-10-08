/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";

export default class BasicExample extends Component {
  render() {
    const proImage = this.props.file;
    return (
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            width: 261,
            height: 304,
            src: proImage
          },
          largeImage: {
            src: proImage,
            width: 928,
            height: 1080
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%"
          }
        }}
      />
    );
  }
}
