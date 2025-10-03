import React from "react";

const HospitalLocation = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", flexDirection:"column",alignItems: "center", height: "100vh",gap:"30px"}}>
        <h3>In Case of Emergency,</h3>
        <h4 >Go To Hospital</h4>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9530931134623!2d78.75152507428065!3d23.820266978622776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d3fb947df8b3%3A0xcd69615889e60d5b!2z4KSs4KWB4KSC4KSm4KWH4KSy4KSW4KSC4KShIOCkruClh-CkoeCkv-CkleCksiDgpJXgpYngpLLgpYfgpJw!5e0!3m2!1shi!2sin!4v1758197426592!5m2!1shi!2sin"
          width="600"
          height="450"
          style={{border:"2px dashed #000000"}}
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default HospitalLocation;
