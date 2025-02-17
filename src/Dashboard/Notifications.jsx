import React, { useState } from "react";
import "../Dashboard/Dashboard_Styles/Notifications.css";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    orderUpdates: { email: true, sms: false, inApp: true },
    promotions: { email: false, sms: true, inApp: false },
    weeklyReports: { email: true, sms: false, inApp: false, schedule: "Monday 9 AM" },
  });

  const [status, setStatus] = useState("");
  const [previewMessage, setPreviewMessage] = useState("");

  const handleToggle = (type, channel) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [channel]: !prev[type][channel],
      },
    }));
    setStatus("Changes not saved yet.");
  };

  const handleScheduleChange = (e) => {
    setNotifications((prev) => ({
      ...prev,
      weeklyReports: {
        ...prev.weeklyReports,
        schedule: e.target.value,
      },
    }));
    setStatus("Changes not saved yet.");
  };

  const handlePreview = () => {
    const enabledChannels = [];
    if (notifications.orderUpdates.email) enabledChannels.push("Email");
    if (notifications.orderUpdates.sms) enabledChannels.push("SMS");
    if (notifications.orderUpdates.inApp) enabledChannels.push("In-App");
    if (enabledChannels.length === 0) {
      setPreviewMessage("Please enable at least one notification channel.");
    } else {
      setPreviewMessage(`Preview: Notifications will be sent via ${enabledChannels.join(", ")}.`);
    }
  };

  const handleSave = () => {
    if (!notifications.orderUpdates.email && !notifications.orderUpdates.sms && !notifications.orderUpdates.inApp) {
      setStatus("Error: Please enable at least one channel for order updates.");
      return;
    }

    setStatus("Saving...");
    setTimeout(() => {
      setStatus("Notification settings saved successfully!");
    }, 1000);
  };

  return (
    <div className="notification-settings-container">
      <h2 className="settings-title">Advanced Notification Settings</h2>
      <div className="notification-section">
        {["orderUpdates", "promotions", "weeklyReports"].map((type) => (
          <div key={type} className="notification-group">
            <h3 className="notification-group-title">
              {type === "orderUpdates"
                ? "Order Updates"
                : type === "promotions"
                ? "Promotions & Offers"
                : "Weekly Reports"}
            </h3>
            <div className="notification-options">
              {["email", "sms", "inApp"].map((channel) => (
                <div key={channel} className="notification-item">
                  <span>{channel.toUpperCase()}</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications[type][channel]}
                      onChange={() => handleToggle(type, channel)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              ))}
              {type === "weeklyReports" && (
                <div className="schedule-setting">
                  <label>Report Schedule:</label>
                  <select
                    value={notifications.weeklyReports.schedule}
                    onChange={handleScheduleChange}
                  >
                    <option>Monday 9 AM</option>
                    <option>Wednesday 3 PM</option>
                    <option>Friday 6 PM</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="status-message">{status}</div>
        <button className="preview-btn" onClick={handlePreview}>
          Preview Notification
        </button>
        {previewMessage && <div className="preview-message">{previewMessage}</div>}
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
