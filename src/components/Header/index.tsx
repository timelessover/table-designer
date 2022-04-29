import { useStore } from "@/context";
import { prefix } from "@/shared/constants";
import { Button, Card, message, Modal, Space } from "antd";
import React, { useState } from "react";
import TabsCard from "./CodePanel";
import Logo from "./Logo";
import "./style.less";

function Header() {
  const { app } = useStore();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className={`${prefix}--header`}>
        <Logo />
        <Space>
          <Button onClick={showModal}>代码展示</Button>
          <Button
            type="primary"
            onClick={() => {
              app.saveSchema();
              message.success("保存成功");
            }}
          >
            保存
          </Button>
        </Space>
      </div>
      <Modal
        title="代码块"
        width="100vw"
        style={{
          height:'100vh'
        }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <TabsCard />
      </Modal>
    </>
  );
}

export default Header;
