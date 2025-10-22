import React, { useState } from "react";

const ProfileForm = ({ onSave, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", avatar: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onSave(form);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded-lg p-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded-lg p-2"
      />
      <input
        name="avatar"
        type="text"
        placeholder="Avatar URL (optional)"
        value={form.avatar}
        onChange={handleChange}
        className="w-full border rounded-lg p-2"
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
