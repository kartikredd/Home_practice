import React from "react";
import { Button, Image, Layout, Typography } from "antd";
import Leafs from "../../src/Images/Leafs.svg";
import Tamato from "../../src/Images/Tamato.svg";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const App = () => {
  const navigate = useNavigate();
  const onclick = () => {
    navigate("/shop");
  };
  const onchange = () => {
    navigate("/about");
  };
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div>
              <Typography style={{ color: "green", fontSize: "25px" }}>
                World Peas
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                type="link"
                style={{ marginRight: "20px", color: "black" }}
                onClick={onclick}
              >
                Shop
              </Button>
              <Typography style={{ marginRight: "20px" }}>Newstand</Typography>
              <Button
                type="link"
                onClick={onchange}
                style={{ marginRight: "20px", color: "black" }}
              >
                {" "}
                Who We Are
              </Button>
              <Typography style={{ marginRight: "20px" }}>
                My Profile
              </Typography>
              <Button
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Basket (3)
              </Button>
            </div>
          </div>
        </Header>
      </Layout>
      <Typography
        style={{ textAlign: "center", marginTop: "20px", fontSize: "30px" }}
      >
        We’re farmers, purveyors, and eaters of <br /> organically grown food.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button
          style={{
            backgroundColor: "green",
            color: "white",

            border: "1px solid",
          }}
        >
          Browse our shop
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "80px",
          pointerEvents: "none",
        }}
      >
        <Image
          src={Leafs}
          alt=""
          style={{ height: "500px", width: "660px", marginLeft: "100px" }}
        ></Image>

        <Image
          src={Tamato}
          alt=""
          style={{ height: "500px", width: "500px", marginRight: "200px" }}
        ></Image>
      </div>
      <Typography>
        Central California — The person who grew these was located in Central
        California and, er, hopefully very well-compensated.
      </Typography>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <Typography
          style={{ marginLeft: "16%", color: "000000", fontSize: "18px" }}
        >
          WHAT WE BELIEVE
        </Typography>
        <Typography style={{ marginLeft: "50px", fontSize: "18px" }}>
          We believe in produce. Tasty produce. Produce like:
          <br />
          <br /> Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers.
          Jicamas. Cauliflowers.
          <br />
          Brussels sprouts. Shallots. Japanese eggplants. Asparagus.
          Artichokes—Jerusalem
          <br /> artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini.
          Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley.
          Dill.
          <br />
          <br />
          What are we forgetting?
          <br />
          <br />
          Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
          Persian cucumbers,
          <br /> in addition to aforementioned “normal” cucumbers. Artichokes.
          Zucchinis. Pumpkins.
          <br />
          Squash (what some cultures call pumpkins). Sweet potatoes
          <br /> and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom.
          Fruits of our labor (this website). Sorrel.
          <br /> Pineapple. Mango. Gooseberries. Blackberries. Tomatoes.
          Heirloom tomatoes. Beets.
          <br /> Chives. Corn. Endive. Escarole, which, we swear, we’re vendors
          of organic produce,
          <br />
          but if you asked us to describe what escaroles are...
        </Typography>
      </div>
    </>
  );
};
export default App;
