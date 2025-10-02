import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "sonner";
import portfolioData from "@/data/portfolio.json";

const Admin = () => {
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState(JSON.stringify(portfolioData, null, 2));
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    setJsonData(JSON.stringify(portfolioData, null, 2));
  }, []);

  const handleSave = () => {
    try {
      JSON.parse(jsonData);
      localStorage.setItem("portfolioData", jsonData);
      toast.success("데이터가 저장되었습니다!");
    } catch (error) {
      toast.error("잘못된 JSON 형식입니다. 다시 확인해주세요.");
    }
  };

  const handleDownload = () => {
    try {
      const data = JSON.parse(jsonData);
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "portfolio-data.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast.success("JSON 파일이 다운로드되었습니다!");
    } catch (error) {
      toast.error("다운로드 중 오류가 발생했습니다.");
    }
  };

  const handleReset = () => {
    setJsonData(JSON.stringify(portfolioData, null, 2));
    toast.info("초기값으로 리셋되었습니다.");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              홈으로
            </Button>
            <h1 className="text-3xl font-bold">관리자 페이지</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset}>
              초기화
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              JSON 다운로드
            </Button>
            <Button onClick={handleSave} className="gradient-primary">
              저장
            </Button>
          </div>
        </div>

        <Card className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="profile">프로필</TabsTrigger>
              <TabsTrigger value="about">소개</TabsTrigger>
              <TabsTrigger value="experience">경력</TabsTrigger>
              <TabsTrigger value="skills">기술</TabsTrigger>
              <TabsTrigger value="projects">프로젝트</TabsTrigger>
              <TabsTrigger value="awards">수상</TabsTrigger>
              <TabsTrigger value="contact">연락처</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <h3>프로필 정보 수정</h3>
                <p className="text-muted-foreground">
                  아래 JSON 에디터에서 프로필 정보를 직접 수정할 수 있습니다.
                </p>
              </div>
              <Textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
                placeholder="JSON 데이터를 입력하세요..."
              />
            </TabsContent>

            <TabsContent value="about" className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <h3>소개 섹션 관리</h3>
                <p className="text-muted-foreground">
                  자기소개, KPI 등의 정보를 수정할 수 있습니다.
                </p>
              </div>
              <Textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="experience" className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <h3>경력 관리</h3>
                <p className="text-muted-foreground">
                  회사, 직책, 근무 기간 및 성과를 추가/수정/삭제할 수 있습니다.
                </p>
              </div>
              <Textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="skills" className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <h3>기술 스택 관리</h3>
                <p className="text-muted-foreground">
                  카테고리별 기술과 숙련도를 관리할 수 있습니다.
                </p>
              </div>
              <Textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <h3>프로젝트 관리</h3>
                <p className="text-muted-foreground">
                  프로젝트 정보, 기술 스택, 성과 등을 관리할 수 있습니다.
                </p>
              </div>
              <Textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="awards" className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <h3>수상 이력 관리</h3>
                <p className="text-muted-foreground">
                  수상, 자격증, 교육 이수 내역을 관리할 수 있습니다.
                </p>
              </div>
              <Textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <h3>연락처 관리</h3>
                <p className="text-muted-foreground">
                  이메일, 전화번호, 소셜 미디어 링크를 관리할 수 있습니다.
                </p>
              </div>
              <Textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="font-mono text-sm min-h-[600px]"
              />
            </TabsContent>
          </Tabs>
        </Card>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            💡 <strong>팁:</strong> JSON 형식을 유지하면서 데이터를 수정하세요. 
            저장 버튼을 누르면 브라우저에 임시 저장되며, 
            JSON 다운로드 버튼으로 파일로 백업할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
