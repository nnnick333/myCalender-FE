import React from 'react';

export default function CreateEvent() {
  return (
    <>
      {/* Required Fields */}
      <label className="block text-sm font-medium mb-1">Start Time</label>
      <input
        name="starts_at"
        type="datetime-local"
        required
        className="border p-2 w-full mb-4 rounded"
        aria-label="Start Time"
      />

      <label className="block text-sm font-medium mb-1">End Time</label>
      <input
        name="ends_at"
        type="datetime-local"
        required
        className="border p-2 w-full mb-4 rounded"
        aria-label="End Time"
      />

      {/* Optional Fields */}
      <label className="block text-sm font-medium mb-1">Name</label>
      <input
        name="name"
        type="text"
        className="border p-2 w-full mb-4 rounded"
        aria-label="Event Name"
      />

      <label className="block text-sm font-medium mb-1">Event Privacy</label>
      <select
        name="is_public"
        className="border p-2 w-full mb-4 rounded"
        defaultValue=""
        aria-label="Event Privacy"
      >
        <option value="" disabled>
          Select...
        </option>
        <option value="true">Public</option>
        <option value="false">Private</option>
      </select>

      <label className="block text-sm font-medium mb-1">Recurrence</label>
      <input
        name="recurrence"
        type="text"
        placeholder="e.g. weekly, monthly"
        className="border p-2 w-full mb-4 rounded"
      />

      <label className="block text-sm font-medium mb-1">Description</label>
      <textarea
        name="description"
        className="border p-2 w-full mb-4 rounded"
        rows={3}
        aria-label="Description"
      />

      <label className="block text-sm font-medium mb-1">Latitude</label>
      <input
        name="latitude"
        type="number"
        step="any"
        className="border p-2 w-full mb-4 rounded"
        aria-label="Latitude"
      />

      <label className="block text-sm font-medium mb-1">Longitude</label>
      <input
        name="longitude"
        type="number"
        step="any"
        className="border p-2 w-full mb-4 rounded"
        aria-label="Longitude"
      />

      <label className="block text-sm font-medium mb-1">Color</label>
      <input name="color" type="color" className="w-16 h-10 p-0 border-0 mb-4" aria-label="Color" />
    </>
  );
}
