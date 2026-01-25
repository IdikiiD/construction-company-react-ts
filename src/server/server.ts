import express, {type Request, type Response} from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());

type RequestData = {
    name: string;
    phone: string;
    width: number;
    height: number;
    tabId: string;
    balconyType: string;
    glazingType: string;
    option: string;

};

const dataStore: RequestData[] = [];


app.post("/api/request", (req: Request, res: Response) => {
    console.log("BODY:", req.body);
    const { name, phone, tabId, width, height,balconyType,glazingType,option } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ success: false });
    }


    const parsedWidth = Number(width);
    const parsedHeight = Number(height);

    dataStore.push({
        name,
        phone,
        tabId,
        width: parsedWidth,
        height: parsedHeight,
        balconyType,
        glazingType,
        option
    });

    console.log("Получено:", {
        name,
        phone,
        tabId,
        balconyType,
        glazingType,
        option,

        width: parsedWidth,
        height: parsedHeight,
    });

    res.json({ success: true });
});

app.get("/api/data", (_req, res) => {
    res.json(dataStore);
});

app.listen(PORT, () => {
    console.log(`API запущено: http://localhost:${PORT}`);
});
