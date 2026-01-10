export function initPrivacyModal() {
  const isUserAcceptedPrivacy = JSON.parse(
    localStorage.getItem("isUserAcceptedPrivacy")
  )

  const acceptPolicyBtn = document.querySelector(".privacy-accept")
  const rejectPolicyBtn = document.querySelector(".privacy-reject")
  const privacyModal = document.querySelector(".privacy-modal")

  if (!privacyModal || !acceptPolicyBtn || !rejectPolicyBtn) {
    return
  }

  if (!isUserAcceptedPrivacy) {
    privacyModal.classList.add("privacy-modal--shown")
  }

  acceptPolicyBtn.addEventListener("click", () => {
    privacyModal.classList.remove("privacy-modal--shown")
    localStorage.setItem("isUserAcceptedPrivacy", JSON.stringify(true))
  })

  rejectPolicyBtn.addEventListener("click", () => {
    privacyModal.classList.remove("privacy-modal--shown")
  })
}
