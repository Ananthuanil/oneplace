import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { CommunityModule } from "./community/community.module";
import { SkillModule } from "./skill/skill.module";
import { SkillSetModule } from "./skillSet/skillSet.module";
import { CandidateModule } from "./candidate/candidate.module";
import { InterviewFeedbackModule } from "./interviewFeedback/interviewFeedback.module";
import { InterviewModule } from "./interview/interview.module";
import { OpportunityModule } from "./opportunity/opportunity.module";
import { PartnerModule } from "./partner/partner.module";
import { ProjectModule } from "./project/project.module";
import { CommunicationFeedbackModule } from "./communicationFeedback/communicationFeedback.module";
import { AwardModule } from "./award/award.module";
import { ProjectInvolvementModule } from "./projectInvolvement/projectInvolvement.module";
import { SkillLevelModule } from "./skillLevel/skillLevel.module";
import { RecruitmentPartnerModule } from "./recruitmentPartner/recruitmentPartner.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    CommunityModule,
    SkillModule,
    SkillSetModule,
    CandidateModule,
    InterviewFeedbackModule,
    InterviewModule,
    OpportunityModule,
    PartnerModule,
    ProjectModule,
    CommunicationFeedbackModule,
    AwardModule,
    ProjectInvolvementModule,
    SkillLevelModule,
    RecruitmentPartnerModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
