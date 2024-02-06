import { Button, Card, Divider, Image, Typography } from "antd";
import Tamatoi from "../../src/Images/Tamato-1.svg";
import Allam from "../../src/Images/Allam.svg";
import Onion from "../../src/Images/onion.svg";
import Edit from "../../src/Images/Edit.svg";
import React from "react";
const Shop = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ marginLeft: "5%" }}>
        <Typography style={{ fontSize: "30px" }}>Basket</Typography>
        <Divider></Divider>
        <div
          style={{
            display: "flex",
            pointerEvents: "none",
            marginTop: "70px",
          }}
        >
          <Image
            src={Tamatoi}
            alt=""
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              width: "auto",
              height: "100px",
            }}
          />
          <Card
            style={{
              width: "300px",
              height: "100px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Heirloom tomato</Typography>
              <Typography>$5.99</Typography>
            </div>
            <Typography style={{ color: "green" }}>$5.99 / lb</Typography>
            <Button style={{ borderRadius: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography style={{ marginRight: "25px" }}>1 lb</Typography>
                <Image src={Edit} alt="" />
              </div>
            </Button>
          </Card>
        </div>
        <div
          style={{ display: "flex", pointerEvents: "none", marginTop: "30px" }}
        >
          <Image
            src={Allam}
            alt=""
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              width: "auto",
              height: "100px",
            }}
          />
          <Card
            style={{
              width: "300px",
              height: "100px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Organic ginger</Typography>
              <Typography>$6.50</Typography>
            </div>
            <Typography style={{ color: "green" }}>$12.99 / lb</Typography>
            <Button style={{ borderRadius: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography style={{ marginRight: "25px" }}>1 lb</Typography>
                <Image src={Edit} alt="" />
              </div>
            </Button>
          </Card>
        </div>
        <div
          style={{ display: "flex", pointerEvents: "none", marginTop: "30px" }}
        >
          <Image
            src={Onion}
            alt=""
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              width: "auto",
              height: "100px",
            }}
          />
          <Card
            style={{
              width: "300px",
              height: "100px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Sweet onion</Typography>
              <Typography>$14.95</Typography>
            </div>
            <Typography style={{ color: "green" }}>$2.99 / lb</Typography>
            <Button style={{ borderRadius: "20px", marginTop: "0px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography style={{ marginRight: "25px" }}>1 lb</Typography>
                <Image src={Edit} alt="" />
              </div>
            </Button>
          </Card>
        </div>
      </div>
      <Card style={{ width: "20%", marginTop: "150px", height: "auto" }}>
        <Typography style={{ fontSize: "18px", color: "black 100%" }}>
          Order summary
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Typography>Subtotal</Typography>
          <Typography>$27.44</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Typography>Shipping</Typography>
          <Typography>$3.99</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Typography>Tax</Typography>
          <Typography>$2.00</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Typography style={{ color: "black 100%" }}>Total</Typography>
          <Typography>$33.43</Typography>
        </div>
        <Button
          style={{
            marginLeft: "50px",
            backgroundColor: "green",
            color: "white",
            marginTop: "20px",
          }}
        >
          Continue to payment
        </Button>
      </Card>
    </div>
  );
};
export default Shop;
