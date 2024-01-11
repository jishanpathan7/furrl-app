import React, {useState, useEffect} from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import HumanTree from "./HumanTrees";
import CircularProgress from "@mui/material/CircularProgress";

const OrgChart = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  function traverse(obj, firstRecursion = false) {
    if (obj?.child?.length === 0) {
      return firstRecursion ? (
        <></>
      ) : (
        <TreeNode
          label={
            <HumanTree
              data={{
                name: obj.name,
                designation: obj.designation,
                url: obj.img,
              }}
            />
          }
        />
      );
    }
    let childNodes = obj?.child?.map((child) => traverse(child));
    return firstRecursion ? (
      [childNodes]
    ) : (
      <TreeNode
        label={
          <HumanTree
            data={{
              name: obj.name,
              designation: obj.designation,
              url: obj.img,
            }}
          />
        }
      >
        {childNodes}
      </TreeNode>
    );
  }

  useEffect(() => {
    // Simulating API call delay
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/employees");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  if (loading) {
    return <CircularProgress />;
  }

 return (
  <Tree
  lineWidth={"3px"}
  lineColor={"#ddd"}
  lineBorderRadius={"10px"}
  label={
    <HumanTree
      data={{ name: data.name, designation: data.designation, url: data.img }}
    />
  }
>
  {traverse(data, true)}
</Tree>
 )
};

export default OrgChart;
