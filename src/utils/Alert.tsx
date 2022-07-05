import { notification } from "antd";

export const successAlert = (message: string) => {
  notification.success({
    message: message,
    placement: "bottomLeft",
    duration: 4
  });
};

export const errorAlert = (message: string) => {
  notification.error({
    message: message,
    placement: "bottomLeft",
    duration: 4
  });
};
