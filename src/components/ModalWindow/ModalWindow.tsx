import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Modal, View } from "react-native";
import { makeStyles } from "./styles";

type IModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  Component?: React.ReactNode;
} & PropsWithChildren;

const ModalWindow = ({
  isModalOpen,
  setIsModalOpen,
  children,
  Component,
}: IModalProps) => {
  const classes = makeStyles();

  return (
    <>
      {Component}
      <View style={classes.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalOpen}
          onRequestClose={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <View style={classes.centeredView}>
            <View style={classes.modalView}>{children}</View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ModalWindow;
