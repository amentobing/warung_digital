export function onRequest({ locals, cookies, url, redirect }, next) {
  if (cookies.get("tokenMidtrans")) {
    const sessionData = cookies.get("tokenMidtrans").value;
    locals.midtrans = sessionData;
  }

  if (cookies.get("status")) {
    const sessionData = cookies.get("status").value;
    if (sessionData == "success" || sessionData == "error") {
      cookies.delete("status", { path: "/status" });
      cookies.delete("tokenMidtrans", { path: "/" });
      locals.statusPayment = sessionData;
    }
  }

  return next();
}
