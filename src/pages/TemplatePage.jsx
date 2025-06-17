import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { FiPlus, FiSearch } from "react-icons/fi";

const TemplatePage = () => {
  return (
    <div className="w-full min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md border">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">🧩 UI Component Documentation</h1>

        {/* ========== BUTTON COMPONENT ========== */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">🔘 Component: Button</h2>

          <div className="grid grid-cols-5 text-sm text-gray-600 font-medium mb-2">
            <div></div>
            <div className="text-center">Default</div>
            <div className="text-center">With Icon</div>
            <div className="text-center">Disabled</div>
            <div className="text-center">Loading</div>
          </div>

          {/* Fill */}
          <div className="grid grid-cols-5 items-center gap-3 mb-6">
            <p className="font-semibold text-gray-600">Fill</p>
            <Button variant="fill">Button</Button>
            <Button variant="fill" leftIcon={FiPlus} rightIcon={FiPlus}>Button</Button>
            <Button variant="fill" disabled>Button</Button>
            <Button variant="fill" isLoading>Button</Button>
          </div>

          {/* Outline */}
          <div className="grid grid-cols-5 items-center gap-3">
            <p className="font-semibold text-gray-600">Outline</p>
            <Button variant="outline">Button</Button>
            <Button variant="outline" leftIcon={FiPlus} rightIcon={FiPlus}>Button</Button>
            <Button variant="outline" disabled>Button</Button>
            <Button variant="outline" isLoading>Button</Button>
          </div>
        </section>

        {/* ========== INPUT COMPONENT ========== */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">🔤 Component: Input</h2>

          <div className="grid grid-cols-3 gap-6">
            <Input label="Default Input" placeholder="Enter name" />
            <Input label="Disabled" placeholder="Cannot type" disabled />
            <Input label="With Error" placeholder="Enter email" error="Invalid email address" />
            <Input label="With Left Icon" placeholder="Search..." leftIcon={FiSearch} />
            <Input label="With Right Icon" placeholder="Search..." rightIcon={FiSearch} />
            <Input label="With Both Icons" leftIcon={FiSearch} rightIcon={FiSearch} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplatePage;
