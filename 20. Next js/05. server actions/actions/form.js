"use server"
import fs from 'fs/promises'

export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("address"));
    await fs.writeFile('demo.txt', `Name: ${e.get("name")} | Address: ${e.get("address")}\n`)
}
