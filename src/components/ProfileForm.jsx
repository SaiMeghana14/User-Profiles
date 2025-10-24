import React, { useEffect, useState } from "react";

export default function ProfileForm({ onSubmit, editing, cancelEdit }) {
  const [form, setForm] = useState({ name: "", email: "", role: "", image: "" });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    onSubmit({ ...form, id: editing?.id || Date.now() });
    setForm({ name: "", email: "", role: "", image: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full dark:bg-gray-700"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full dark:bg-gray-700"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <input
        type="text"
        placeholder="Role"
        className="border p-2 rounded w-full dark:bg-gray-700"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        className="border p-2 rounded w-full dark:bg-gray-700"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          {editing ? "Update" : "Add"} Profile
        </button>
        {editing && (
          <button
            type="button"
            onClick={cancelEdit}
            className="text-gray-500 hover:text-red-500 text-sm"
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
}
