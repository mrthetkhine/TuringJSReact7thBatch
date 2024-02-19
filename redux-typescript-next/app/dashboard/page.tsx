"use client";
import { Metadata } from 'next'
import ProblemComponent from './ProblemComponent';
import ErrorBoundary from "@/app/components/ErrorBoundary";
export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
        <ProblemComponent/>
        {/*<ErrorBoundary>

        </ErrorBoundary>*/}

    </>
  );
}



