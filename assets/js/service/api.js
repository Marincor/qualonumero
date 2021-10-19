const url = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";

export default async function getNumber() {

   return await fetch(url).then(res => res.json())
}