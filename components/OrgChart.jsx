import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { ORGDATA } from "../data"
import HumanTree from "./HumanTrees";

const data = ORGDATA;

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

const OrgChart = () => (
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
);

export default OrgChart;
