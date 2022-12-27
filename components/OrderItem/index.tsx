// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCallOutline, IoCheckmark, IoChevronUp } from "react-icons/io5";
import OrderAction from "../OrderAction";
import StatusBadge from "../StatusBadge";
import { diff_hours } from "../../interfaces/common";
import { OrderResponse } from "../../services/service";
import { useQuery } from "@tanstack/react-query";
import OApi from "../../services";
import Swal from "sweetalert2";

type Props = {
  order: OrderResponse;
  changeStatus: Function;
};

const OrderItem = ({ order, changeStatus }: Props) => {
  const [active, setActive] = useState(false);
  const [waitingTime, setWaitingTime] = useState<number>(0);

  useEffect(() => {
    let now = new Date();
    const orderDateTime = new Date(order.created_at);
    setWaitingTime(diff_hours(orderDateTime, now));
  }, [waitingTime, order.created_at]);

  const handleChangeStatus = () => {
      //@ts-ignore
      const checkLog = order.logs.find((item:any) => item.status == 2 );
      if ( checkLog === undefined || !checkLog) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Món chưa nấu xong đâu. Check lại với admin đơn này nhá!',
        }).catch(err => {
          console.log(err)
        })
      }
      else changeStatus(order.id)

  }
  // console.log("Order Waiting Time: ", );
  return (
    <div
      className={`order-item border-[1px] border-solid border-gray-100 px-2 py-3 rounded-lg `}
    >
      <div className="flex justify-start items-center">
        <div className="name-box">
          <div>
            <h1 className="text-xl font-bold text-purple font-pr">
              {/* @ts-ignore */}
              {order.user ? order.user.name : order.name} -{" "}
              {order.location.address}
              {order.location_detail && "- " + order.location_detail}
            </h1>
          </div>
          {order.status == 2 && (
            <div>
              <div className="mt-1 flex justify-start">
                {waitingTime > (order.location.distance * 70) / 100 && (
                  <StatusBadge color="pending" title="Chờ lâu" />
                )}
                {
                  order.location?.distance == 0 && <StatusBadge color="success" title="Giao tại quầy" />
                }
              </div>
            </div>
          )}
        </div>
        {order.status === 2 ? (
          <div className="action-box ml-auto flex gap-2">
            {/*<a*/}
            {/*  href={`tel:${order.phone}`}*/}
            {/*  className="call-btn bg-[#34A853] p-2 rounded-full "*/}
            {/*>*/}
            {/*  <IoCallOutline color="white" size={20} />*/}
            {/*</a>*/}
            {/* <button className="call-btn bg-purple p-2 rounded-full ">
            <IoChatboxEllipsesOutline color="white" size={20} />
          </button> */}
            <button
              className="call-btn bg-[#ffcb40] p-2 rounded-full "
              onClick={() => handleChangeStatus()}
            >
              <IoCheckmark color="white" size={20} />
            </button>
          </div>
        ): <></>}
      </div>
      <div
        className={`detail-pane py-4 overflow-hidden duration-300 transition-all ease-linear ${
          active ? "h-auto" : "h-[0]"
        }`}
      >
        <div className="dishes-list mt-4">
          {/*<h2 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">*/}
          {/*  Danh sách món ăn:*/}
          {/*</h2>*/}
          <ul className="space-y-2 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 font-pr">
            {order ? (
              // @ts-ignore
              order.dishes.map((item: any, index: number) => (
                <li key={index} className="text-base flex justify-between">
                  <span>{item.name}</span>
                  <span>x{item.pivot.quantity}</span>
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </div>
      </div>
      <button
        className={`text-center w-full select-none flex justify-center z-100 relative rotate-0 duration-300 ease-linear transition-all ${
          !active && "rotate-180"
        }`}
        onClick={() => setActive(!active)}
      >
        <IoChevronUp />
      </button>
    </div>
  );
};

export default OrderItem;
