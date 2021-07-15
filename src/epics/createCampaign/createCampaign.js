import React, { useState } from "react";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/style.css";

import styles from "./styles.module.scss";
import firebase from "../../services/firebase";
import Button from "../../components/button/button";
import Spinner from "../../components/spinner/spinner";
import Spacer from "../../components/spacer/spacer";

const CreateCampaign = (props) => {
  const [name, setName] = useState("");
  const [creatorEmail, setCreatorEmail] = useState("");
  const [campaignName, setcampaignName] = useState("");
  const [emails, setEmails] = useState([]);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    const campaignData = {
      campaignName: campaignName,
      creatorName: name,
      creatorEmail: creatorEmail,
      emails: emails,
      mailSubject: emailSubject,
      mailBody: emailBody,
      createdAt: Date.now(),
      lastModifiedAt: Date.now(),
      status: "created",
    };
    const campaignRef = firebase.database().ref("campaign-data");
    await campaignRef.push(campaignData);
    setName("");
    setCreatorEmail("");
    setcampaignName("");
    setEmails("");
    setEmailSubject("");
    setEmailBody("");
    event.target.reset();
    setIsLoading(false);
    props.history.push("/");
  };

  return (
    <div className={styles.root} data-testid={"create-campaign"}>
      <form onSubmit={(e) => handleSubmit(e)} id="campaign-form-id">
        <h3 className={styles["form-sub-header"]}>Your Campaign Name</h3>
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setcampaignName(e.target.value)}
          placeholder="Enter the Campaign Name"
          required
        />
        <Spacer height={40} />
        <h3 className={styles["form-sub-header"]}>Email Target List</h3>
        <ReactMultiEmail
          placeholder="Enter your emails"
          emails={emails}
          onChange={(_emails) => {
            setEmails(_emails);
          }}
          getLabel={(email, index, removeEmail) => {
            return (
              <div data-tag key={index}>
                <div data-tag-item>{email}</div>
                <span data-tag-handle onClick={() => removeEmail(index)}>
                  ×
                </span>
              </div>
            );
          }}
        />
        <Spacer height={80} />
        <h3 className={styles["form-sub-header"]}>From</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
          required
        />
        <input
          type="email"
          value={creatorEmail}
          onChange={(e) => setCreatorEmail(e.target.value)}
          placeholder="Enter your Email"
          required
        />
        <Spacer height={40} />
        <h3 className={styles["form-sub-header"]}>Email Details</h3>
        <input
          type="text"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
          placeholder="Add the Subject for your Email"
          required
        />
        <textarea
          type="text"
          value={emailBody}
          onChange={(e) => setEmailBody(e.target.value)}
          placeholder="Add the Email Body"
          required
        />
        <Button type="submit" text="Create Campaign" />
      </form>
      {isLoading && <Spinner />}
    </div>
  );
};

export default CreateCampaign;
