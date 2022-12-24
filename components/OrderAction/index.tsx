import React from "react";
import {
  IoCallOutline,
  IoChatboxEllipsesOutline,
  IoCheckmark,
} from "react-icons/io5";
import OApi from "../../services";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

type Props = {
  href: string;
  oid: number;
  currentStatus: number;
  refetch: Function;
};

const OrderAction = ({ href, oid, currentStatus, refetch }: Props) => {
  //   const updateOrderShipper = useMutation(
  //     ["updateOrderShipper"],
  //     ({ id, data }: { id: number; data: any }) =>
  //       OApi.shipper.updateOrderShipper(id, data)
  //   );
  //   const changeStatus = () => {
  //     Swal.fire({
  //       title:
  //         currentStatus == 3 ? "Đã nhận đồ ship?" : "Đã giao hàng thành công?",
  //       showCancelButton: true,
  //       confirmButtonText: "Xác nhận",
  //       cancelButtonText: `Chưa xác nhận`,
  //     }).then((result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         updateOrderShipper.mutate(
  //           { id: oid, data: { status: currentStatus + 1 } },
  //           {
  //             onSuccess: async (data) => {
  //               Swal.fire("Thành công!", "", "success");
  //               //   refetch();
  //             },
  //             onError: (e) => {
  //               Swal.fire("Thất bại", "", "info");
  //             },
  //           }
  //         );
  //       }
  //     });
  //   };
  return (
    <div className="action-box ml-auto flex gap-2">
      <a href={href} className="call-btn bg-green-600 p-2 rounded-full ">
        <IoCallOutline color="white" size={20} />
      </a>
      {/* <button className="call-btn bg-purple p-2 rounded-full ">
        <IoChatboxEllipsesOutline color="white" size={20} />
      </button> */}
      <button
        className="call-btn bg-[#DFB23F] p-2 rounded-full "
        // onClick={() => changeStatus()}
      >
        <IoCheckmark color="white" size={20} />
      </button>
    </div>
  );
};

export default OrderAction;
