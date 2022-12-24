import React, {
  EffectCallback,
  ReactElement,
  useEffect,
  useState,
} from "react";
import MainLayout from "../containers";
import { NextPageWithLayout } from "../interfaces/common";
import OrderItem from "../components/OrderItem";
import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderResponse } from "../services/service";
import OApi from "../services";
import AuthLoader from "../components/AuthLoader";

import Swal from "sweetalert2";
type DashboardProp = {};

const Dashboard: NextPageWithLayout = (props: DashboardProp) => {
  const [activeTab, setActiveTab] = useState(2);
  const [dataOrder, setDataOrder] = useState<OrderResponse[]>();
  const { data, isLoading, error, refetch } = useQuery<OrderResponse>(
    ["getOrdersByChief", activeTab],
    // @ts-ignore
    () => OApi.chief.getOrdersByChief({ status: activeTab, limit: 100 })
  );
  console.log(data);

  const updateOrderChief = useMutation(
    ["updateOrderChief"],
    ({ id, data }: { id: number; data: any }) =>
      OApi.chief.updateOrderChief(id, data)
  );
  useEffect(() => {
    // @ts-ignore
    if (data) setDataOrder(data.data.data);
  }, [activeTab, data]);

  if (isLoading) return <div>loading...</div>;

  const changeStatus = (oid: number) => {
    Swal.fire({
      title: "Đã nấu xong?",
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      cancelButtonText: `Chưa xác nhận`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updateOrderChief.mutate(
          { id: oid, data },
          {
            onSuccess: async (data) => {
              Swal.fire("Thành công!", "", "success");
              refetch();
            },
            onError: (e) => {
              Swal.fire("Thất bại", "", "info");
            },
          }
        );
      }
    });
  };
  console.log(dataOrder);
  return (
    <>
      <AuthLoader>
        <div className="grid py-4 ">
          {/* Button tab */}
          <div className="max-h-[60px] order-state-box flex gap-3 justify-between items-center bg-gray-100 py-2 px-8 w-full rounded-lg">
            <button
              className={
                // @ts-ignore
                `state-item py-[0.3rem] px-8 text-sm text-gray-800 rounded-full font-pr ${
                  activeTab === 2 && " bg-yell !text-white"
                }`
              }
              data-tabIndex={2}
              onClick={() => setActiveTab(2)}
            >
              Chờ nấu
            </button>
            <button
              className={
                // @ts-ignore
                `state-item py-[0.3rem] px-8 text-sm text-gray-800 rounded-full font-pr ${
                  activeTab === 3 && " bg-yell !text-white"
                }`
              }
              onClick={() => setActiveTab(3)}
            >
              Đã nấu xong
            </button>
          </div>
          {/* Order List */}
          <div className="order-list grid gap-5 mt-6">
            {dataOrder ? (
              // @ts-ignore
              dataOrder.map((item: any, index: number) => (
                <OrderItem
                  key={index}
                  order={item}
                  changeStatus={changeStatus}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </AuthLoader>
    </>
  );
};

export default Dashboard;
