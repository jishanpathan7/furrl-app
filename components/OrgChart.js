// components/OrgChart.js
import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import orgChartStyles from "./OrgChart.module.css";
import Avatar from "@mui/material/Avatar";
import { Edit } from "@mui/icons-material";

const OrgChart = ({ data }) => {
  const renderNode = ({ node }) => (
    <div className={`${orgChartStyles.node} ${getNodeStyle(node)}`}>
      <div className={orgChartStyles.avatarContainer}>
        <Avatar
          alt="Avatar"
          className={orgChartStyles.avatar}
          style={{
            background: "#db9adb",
          }}
        />
        <Edit
          className={orgChartStyles.editIcon}
          style={{
            width: "18px",
            height: "18px",
          }}
        />
      </div>
      <div>
        <div className={orgChartStyles.name}>
          <span>{node.name}</span>
        </div>

        <div className={orgChartStyles.designation}>
          <strong className={orgChartStyles.role}>ROLE :</strong>
          {node.designation}
        </div>
      </div>
    </div>
  );

  const getNodeStyle = (node) => {
    if (node.isRoot) {
      return orgChartStyles["root-node"];
    } else if (node.children && node.children.length > 0) {
      return orgChartStyles["child-node"];
    } else {
      return orgChartStyles["grandchild-node"];
    }
  };

  const renderTree = (data, isRoot = false) => {
    return (
      <TreeNode label={renderNode({ node: data })}>
        {data.children && data.children.map((child) => renderTree(child))}
      </TreeNode>
    );
  };

  return (
    <Tree
      lineWidth={"2px"}
      lineColor={"gray"}
      lineBorderRadius={"10px"}
      label={
        <div className={orgChartStyles.node}>
          {renderNode({ node: data[0] })}
        </div>
      }
    >
      {/* {data.map((employee, index) => renderTree(employee, index))} */}
      {data.map((employee, index) => renderTree(employee, index))}
    </Tree>
  );
};

export default OrgChart;
