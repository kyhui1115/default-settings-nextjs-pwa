"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface props {
  children: React.ReactNode;
}

interface ApiError extends Error {
  status?: number;
}

export default function QueryProvider({ children }: props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          // 컴포넌트가 마운트될 때 쿼리를 다시 가져올지 여부 설정
          refetchOnMount: true,

          // 윈도우가 포커스를 얻을 때 쿼리를 다시 가져올지 여부 설정
          refetchOnWindowFocus: false,

          // 주기적으로 쿼리를 다시 가져올 간격(밀리초)을 설정
          refetchInterval: 1000 * 60 * 5,
          refetchIntervalInBackground: false, // 백그라운드에서 동작 여부

          // 데이터가 fresh 상태로 간주되는 기간(밀리초)을 설정
          staleTime: 1000 * 60 * 5,

          // 쿼리 실패 시 재시도 횟수를 설정
          retry: (failureCount, error: ApiError) => {
            if (error.status === 404) return false; // 404에러는 재시도 안함
            return failureCount < 1; // 다른 에러는 1번까지 재시도
          },
        },
      },
    }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
