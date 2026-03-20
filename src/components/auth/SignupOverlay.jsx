"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import SignupForm from "./SignupForm";
import { useAuth } from "../../contexts/AuthContext";

export default function SignupOverlay() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignupSubmit = async () => {
    if (isSubmitting) return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password || !confirmPassword) {
      setErrorMessage("すべての項目を入力してください");
      setShowError(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("パスワードが一致しません");
      setShowError(true);
      return;
    }

    if (password.length < 6) {
      setErrorMessage("パスワードは6文字以上で入力してください");
      setShowError(true);
      return;
    }

    if (!isAgreed) {
      setErrorMessage("利用規約とプライバシーポリシーに同意してください");
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);
    setErrorMessage("");

    try {
      await signUp(trimmedEmail, password);
      router.push("/dashboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "アカウント作成に失敗しました";
      setErrorMessage(message);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoLogin = () => {
    router.push("/login");
  };

  return (
    <div
      className="signup-overlay fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 p-4"
      id="signupOverlay"
    >
      <div className="signup-card w-full max-w-[420px] rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.25)] sm:px-8 sm:py-8">
        <div className="signup-brand mb-6 text-center">
          <i
            className="fa-solid fa-chess-king signup-brand-icon mb-3 text-3xl text-[#C8A44D]"
            aria-hidden="true"
          ></i>
          <div className="signup-brand-title text-[26px] font-black tracking-tight text-slate-900 sm:text-[30px]">
            KING<span className="gold text-[#C8A44D]">and</span>QUEEN
          </div>
          <div className="signup-brand-sub mt-1 text-sm font-medium text-slate-500">
            新規登録
          </div>
        </div>

        <div className="signup-form space-y-4">
          <SignupForm
            emailValue={email}
            passwordValue={password}
            confirmPasswordValue={confirmPassword}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
            isAgreed={isAgreed}
            onToggleAgree={() => setIsAgreed(!isAgreed)}
            onSubmit={handleSignupSubmit}
            onGoLogin={handleGoLogin}
            submitLabel={isSubmitting ? "作成中..." : "アカウントを作成"}
            emailPlaceholder="mail@example.com"
            passwordPlaceholder="パスワード（6文字以上）"
            confirmPasswordPlaceholder="パスワード（確認）"
            labelClassName="text-sm font-semibold text-slate-700"
            inputClassName="rounded-xl border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/25"
            submitButtonClassName="rounded-xl bg-[#C62828] px-4 py-3 text-sm font-bold hover:bg-[#A91F1F]"
          />

          <div
            className={`signup-error rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 ${showError ? "" : "is-hidden hidden"}`}
            id="signupError"
          >
            {errorMessage}
          </div>
        </div>
      </div>
    </div>
  );
}
