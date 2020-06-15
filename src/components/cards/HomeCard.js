import React from "react";
import "./HomeCard.css";
export default function HomeCard() {
    return (
        <div className="card-container">
            <div
                style={{
                    width: "35%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundImage:
                        "url(https://gezimanya.com/sites/default/files/styles/800x600_/public/gezi-notu/2019-11/image-amsterdam_2.jpg)",
                }}
            ></div>
            <div style={{ height: "100%", width: "65%" }}>
                <div
                    style={{
                        width:"12ch",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    <h1>Node.js</h1>
                </div>
                <div className="paragraph-container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        pellentesque nisi ex, eget tempor lorem vulputate eget. Nam laoreet
                        vehicula sapien sed sagittis. Phasellus mi erat, vestibulum a massa
                        id, ultricies aliquam urna. Donec elementum purus vel nisi ultrices,
                        in laoreet justo aliquam. Phasellus tristique est ipsum, vitae
                        eleifend lacus aliquam ac. Suspendisse potenti. Nullam enim tortor,
                        fermentum ut leo rhoncus, vehicula sodales purus. Donec pulvinar sem
                        eu enim accumsan pulvinar.
                    </p>
                </div>
               <button className="card-button">
                   Go Detail
               </button>
            </div>
        </div>
    );
}
